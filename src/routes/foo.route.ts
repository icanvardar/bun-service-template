/* -------------------------------------------------------------------------- */
/*                                EXAMPLE ROUTE                               */
/* -------------------------------------------------------------------------- */

import BaseRoute from "@shared/base-route";
import { FooController } from "@controllers";
import type { Context } from "hono";

const controller = new FooController();

/**
 * A route class that response to client via HTTP.
 */
class Foo extends BaseRoute {
    /**
     * Initializes parent class which is BaseRoute.
     * Also, initializes predefined routes.
     */
    constructor() {
        super("/foo");
        this.initializeRoutes();
    }

    /**
     * Initializes each predefined routes.
     */
    private initializeRoutes() {
        this.router.get("/", this.foo);
    }

    async foo(c: Context): Promise<Response> {
        return c.text(await controller.foo());
    }
}

export default Foo;
