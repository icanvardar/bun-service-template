/* -------------------------------------------------------------------------- */
/*                             EXAMPLE CONTROLLER                             */
/* -------------------------------------------------------------------------- */

import type { Context } from "hono";
import { FooService } from "@services";

const service = new FooService();

/**
 * A controller class that represents bridge between router and service.
 */
class Foo {
    /**
     *
     * @param c indicates server context
     * @returns response to client
     */
    async foo(c: Context): Promise<Response> {
        return c.text(await service.foo());
    }
}

export default Foo;
