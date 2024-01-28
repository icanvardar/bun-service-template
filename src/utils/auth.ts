/* -------------------------------------------------------------------------- */
/*                           EXAMPLE AUTHENTICATION                           */
/* -------------------------------------------------------------------------- */

import { sign, verify } from "hono/jwt";
import { configs } from "@config";

/**
 * An authentication class that consists basic JWT operations
 */
class Auth {
    /**
     * Signs payload by the servers native secret key
     * @param payload indicates that a payload that will be signed
     * @returns token represents signed payload
     */
    public static async sign(payload: AuthPayload): Promise<string> {
        return await sign(payload, configs.secretKey);
    }

    /**
     * Verifies token
     * @param token indicates that a token which was previously signed
     * @returns a payload which was signed previously
     */
    public static async verify(token: string): Promise<AuthPayload> {
        return await verify(token, configs.secretKey);
    }
}

export default Auth;
