import { defineConfig } from "./define-config";

export const configs = defineConfig({
    env: Bun.env.NODE_ENV as unknown as "development" | "production" | "ci" | "test",
    port: parseInt(Bun.env.PORT as string),
    basePath: Bun.env.BASE_PATH,
    secretKey: Bun.env.SECRET_KEY,
});
