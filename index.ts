import { configs } from "@config";
import Server from "@shared/server.ts";
import { FooRoute } from "@routes";
import logger from "@shared/logger";

/* -------------------------------------------------------------------------- */
/*                            SERVER INITIALIZATION                           */
/* -------------------------------------------------------------------------- */
const server = new Server([new FooRoute()]);

/* -------------------------------------------------------------------------- */
/*                                CI OPERATION                                */
/* -------------------------------------------------------------------------- */
if (configs.env == "ci") {
    logger.info("CI successfully completed!");
    process.exit(0);
}

/* -------------------------------------------------------------------------- */
/*                        EXPORTING SERVER CREDENTIALS                        */
/* -------------------------------------------------------------------------- */
export default {
    port: configs.port,
    fetch: server.app.fetch,
} as {
    port: number;
    fetch: () => Response | Promise<Response>;
};
