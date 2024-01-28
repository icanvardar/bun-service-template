/* -------------------------------------------------------------------------- */
/*                             EXAMPLE TEST SUITE                             */
/* -------------------------------------------------------------------------- */

import { expect, test, describe } from "bun:test";

import Server from "@shared/server";
import { FooRoute } from "@routes";
// import { StatusCode } from "@constants";

describe.only("Test FooRoute", () => {
    const server = Server.getInstance([new FooRoute()]);

    test("should return success GET /foo", async () => {
        const res = await server.app.request("/foo");

        // expect(res.status).toEqual(StatusCode.Ok);
        expect(await res.text()).toEqual("Hello world!");
    });
});
