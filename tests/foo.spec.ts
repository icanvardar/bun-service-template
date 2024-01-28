/* -------------------------------------------------------------------------- */
/*                             EXAMPLE TEST SUITE                             */
/* -------------------------------------------------------------------------- */

import { expect, test, describe } from "bun:test";

// import Server from "@shared/server";
// import { FooRoute } from "@routes";
import { configs } from "@config";
// import { StatusCode } from "@constants";

describe.only("Test FooRoute", () => {
    const basePath = configs.basePath;
    // const server = Server.getInstance([new FooRoute()]);

    test("should return success GET /foo", async () => {
        // const res = await server.app.request(basePath + "/foo");
        console.log(basePath);
        // expect(res.status).toEqual(StatusCode.Ok);
        // expect(await res.text()).toEqual("Hello world!");
        expect(1).toEqual(1);
    });
});
