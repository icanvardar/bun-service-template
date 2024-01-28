import { Hono } from "hono";
import { secureHeaders } from "hono/secure-headers";
import { cors } from "hono/cors";
import { prettyJSON } from "hono/pretty-json";
import { logger as honoLogger } from "hono/logger";

import { configs } from "@config";
import { StatusCode } from "@constants";

import logger from "./logger";

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
     * @returns
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
                crossOriginEmbedderPolicy: "require-corp",
                crossOriginOpenerPolicy: "same-origin",
                crossOriginResourcePolicy: "same-origin",
                xFrameOptions: "deny",
                xContentTypeOptions: "nosniff",
                referrerPolicy: "origin-when-cross-origin",
                strictTransportSecurity: "max-age=63072000; includeSubDomains; preload",
                contentSecurityPolicy: {
                    defaultSrc: ["self"],
                },
                xXssProtection: "1; mode=block",
            }),
        );
        this.app.use(
            "*",
            honoLogger((message: string, ...rest: string[]) => {
                logger.info(`${message} ${rest.toString()}`);
            }),
        );
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
