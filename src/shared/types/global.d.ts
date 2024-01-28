import type { Hono } from "hono";

export {};

declare global {
    interface IBaseRoute {
        basePath: string;
        router: Hono;
    }
}
