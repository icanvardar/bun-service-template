import { Hono } from "hono";
import { secureHeaders } from "hono/secure-headers";
import { cors } from "hono/cors";
import { prettyJSON } from "hono/pretty-json";
import { logger as honoLogger } from "hono/logger";

import { configs } from "@config";
import { StatusCode } from "@constants";

import logger from "./logger";

import { swaggerUI } from "@hono/swagger-ui";

import swaggerDefinitions from "../../docs/swagger.json";

/**
 * A server class that configures HTTP server.
 */
class Server {
    public app: Hono;
    private static instance: Server;

    /**
     * Only accepts routes which are derived from BaseRoute class
     * @param routes indicates that array of route classes
     */
    private constructor(routes: IBaseRoute[]) {
        this.app = new Hono().basePath(configs.basePath);

        this.initializeMiddlewares();
        this.initializeRoutes(routes);
    }

    /**
     *
     * @param routes indicates that array of route classes
     * @returns server class
     */
    public static getInstance(routes: IBaseRoute[]): Server {
        if (!Server.instance) {
            Server.instance = new Server(routes);
        }

        return Server.instance;
    }

    /**
     * Initializes global middlewares
     */
    private initializeMiddlewares() {
        this.app.use("*", prettyJSON());
        this.app.use("*", cors());
        this.app.use(
            "*",
            secureHeaders({
                xPermittedCrossDomainPolicies: "none",
                xFrameOptions: "deny",
                xContentTypeOptions: "nosniff",
                strictTransportSecurity: "max-age=63072000; includeSubDomains; preload",
                xXssProtection: "1; mode=block",
            }),
        );
        this.app.use(
            "*",
            honoLogger((message: string, ...rest: string[]) => {
                logger.info(`${message} ${rest.toString()}`);
            }),
        );

        this.app.get("/doc", (c) => {
            return c.json(swaggerDefinitions);
        });

        this.app.get("/ui", swaggerUI({ url: "/api/doc" }));
    }

    /**
     * Initializes routes
     * @param routes indicates that routes which are derived from BaseRoute class
     */
    private initializeRoutes(routes: IBaseRoute[]) {
        routes.forEach((route) => {
            this.app.route(route.basePath, route.router);
        });

        this.app.notFound((c) => {
            return c.text("Not found!", StatusCode.NotFound);
        });

        this.app.onError((err, c) => {
            console.error(`${err}`);
            return c.text("An error occured!", StatusCode.InternalServerError);
        });
    }
}

export default Server;
