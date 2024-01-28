import { expect } from "chai";
import Server from "@shared/server";
import { FooRoute } from "@routes";
import StatusCode from "../src/constants/status-code";

describe("GET /foo", () => {
    it("should return hello world", async () => {
        const server = new Server([new FooRoute()]);

        const res = await server.app.request("/foo");

        expect(res.status).equal(StatusCode.Ok);
        expect(await res.text()).equal("Hello world!");
    });
});
