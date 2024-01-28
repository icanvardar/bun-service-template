import type { Hono } from "hono";

export {};

declare global {
    interface Foo {
        bar: string;
    }

    interface IBaseRoute {
        basePath: string;
        router: Hono;
    }
}
