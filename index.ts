import Server from "./src/shared/server";

import { FooRoute } from "./src/routes";

const server = new Server([new FooRoute()]);

export default server.app;
