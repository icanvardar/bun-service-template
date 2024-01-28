import BaseRoute from "@shared/base-route";
import { FooController } from "@controllers";

const controller = new FooController();

class Foo extends BaseRoute {
    constructor() {
        super("/foo");
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get("/", controller.foo);
    }
}

export default Foo;
