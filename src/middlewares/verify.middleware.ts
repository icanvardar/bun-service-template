/* -------------------------------------------------------------------------- */
/*                             EXAMPLE MIDDLEWARE                             */
/* -------------------------------------------------------------------------- */

import type { Context, Next } from "hono";
import { StatusCode } from "@constants";
import Auth from "@utils/auth";

/**
 * Verifies bearer token
 * @param c context of server
 * @param next next function of server
 */
async function verify(c: Context, next: Next): Promise<void> {
    const tokenRaw = c.req.raw.headers.get("authorization");

    if (!tokenRaw) {
        c.status(StatusCode.NotAcceptable);
        return;
    }

    try {
        await Auth.verify(tokenRaw.split(" ")[0]);
        await next();
    } catch (err: unknown) {
        c.status(StatusCode.Unauthorized);
    }
}

export default verify;
