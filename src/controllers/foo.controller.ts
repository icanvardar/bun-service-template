/* -------------------------------------------------------------------------- */
/*                             EXAMPLE CONTROLLER                             */
/* -------------------------------------------------------------------------- */

import { FooService } from "@services";
import { Controller, Get, Route, SuccessResponse } from "tsoa";

const service = new FooService();

/**
 * A controller class that represents bridge between router and service.
 */
@Route("/foo")
class Foo extends Controller {
    /**
     *
     * @param c indicates server context
     * @returns response to client
     */
    @SuccessResponse("201", "Created")
    @Get("/")
    async foo(): Promise<string> {
        return await service.foo();
    }
}

export default Foo;
