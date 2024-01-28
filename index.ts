import Server from "@shared/server.ts";
import { FooRoute } from "@routes";
import { configs } from "@config";
import logger from "@shared/logger";

const server = new Server([new FooRoute()]);

if (configs.env == "ci") {
    logger.info("CI successfully completed!");
    process.exit(0);
}

export default server.app;
