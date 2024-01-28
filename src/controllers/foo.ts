import type { Context } from "hono";
import { FooService } from "../services";

const service = new FooService();

class Foo {
    async foo(c: Context): Promise<Response> {
        return c.text(await service.foo());
    }
}

export default Foo;
