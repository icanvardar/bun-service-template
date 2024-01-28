import Server from "@shared/server.ts";
import { FooRoute } from "@routes";

const server = new Server([new FooRoute()]);

export default server.app;
