/* -------------------------------------------------------------------------- */
/*                             EXAMPLE CONTROLLER                             */
/* -------------------------------------------------------------------------- */

import { FooService } from "@services";
import { Controller, Get, Route, SuccessResponse, Response } from "tsoa";
import StatusCode from "../constants/status-code";

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
    @SuccessResponse(StatusCode.Ok, "Created")
    @Get("/")
    @Response(StatusCode.Ok, "foo", "Hello world!")
    async foo(): Promise<string> {
        return await service.foo();
    }
}

export default Foo;
