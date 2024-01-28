import { Hono } from "hono";
import { secureHeaders } from "hono/secure-headers";
import { cors } from "hono/cors";
import { prettyJSON } from "hono/pretty-json";
import { StatusCode } from "../constants";

class Server {
    public app: Hono;

    constructor(routes: IBaseRoute[]) {
        this.app = new Hono();

        this.initializeMiddlewares();
        this.initializeRoutes(routes);
    }

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
    }

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
