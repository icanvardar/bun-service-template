import { type RequiredConfig, appConfigSchema } from "./types";

export function defineConfig(config: RequiredConfig) {
    return appConfigSchema.parse(config);
}
