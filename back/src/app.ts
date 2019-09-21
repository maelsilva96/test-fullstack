import * as express from 'express';
import route from "./routes";
import {Sequelize} from "sequelize-typescript";

class App {
    public express: express.Application;
    public sequelize: Sequelize;

    public constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    }

    private middlewares(): void {
        this.express.use(express.json());
    }

    private database(): void {
        this.sequelize = new Sequelize()
    }

    private routes(): void {
        this.express.use(route);
    }
}

export default new App().express;
