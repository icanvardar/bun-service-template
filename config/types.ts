import { z } from "zod";

export const appConfigSchema = z.object({
    env: z.enum(["development", "production", "ci", "test"]),
    port: z.number().default(3000),
    basePath: z.string().default(""),
    secretKey: z.string().default("foo"),
});

export type AppConfig = z.infer<typeof appConfigSchema>;

export type RequiredConfig = Optional<AppConfig, KeysWithFallbackValue>;

type KeysWithFallbackValue = "basePath" | "secretKey";

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
