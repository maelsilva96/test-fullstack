import * as express from 'express';
import route from "./routes";

class App {
    public express: express.Application;

    public constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    }

    private middlewares(): void {
        this.express.use(express.json());
    }

    private routes(): void {
        this.express.use(route);
    }
}

export default new App().express;
