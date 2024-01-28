import { Hono } from "hono";

class BaseRoute {
    protected basePath: string;
    protected router: Hono = new Hono();

    constructor(basePath: string) {
        this.basePath = basePath;
    }
}

export default BaseRoute;
