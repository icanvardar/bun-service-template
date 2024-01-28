import { Hono } from "hono";

/**
 * Base class for each route, and should be
 * implemented to each router.
 */
class BaseRoute implements IBaseRoute {
    public basePath: string;
    public router: Hono = new Hono();

    /**
     * Only accepts basePath of route
     * @param basePath indicates that prefix of router
     */
    constructor(basePath: string) {
        this.basePath = basePath;
    }
}

export default BaseRoute;
