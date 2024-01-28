import { Hono } from "hono";

class BaseRoute implements IBaseRoute {
    public basePath: string;
    public router: Hono = new Hono();

    constructor(basePath: string) {
        this.basePath = basePath;
    }
}

export default BaseRoute;
