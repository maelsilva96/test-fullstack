import * as request from "supertest";
import app from "../../src/app";
import {Database} from "../utils/database";
import User from "../../src/app/models/user";
import {UserFactory} from "../factories/userFactory";
import LogUser from "../../src/app/models/logUser";

describe("Auth", function () {
    beforeEach(async () => {
        await Database.Truncate(LogUser);
        await Database.Truncate(User);
    });

    it("should authenticate with valid credentials", async function () {
        let user = await UserFactory.createNewInstace();

        let response = await request(app)
            .post("/auth")
            .send({
                email: user.email,
                password: user.password
            });
        expect(response.status).toBe(200);
    });

    it("should authenticate with valid credentials and return token", async function () {
        let user = await UserFactory.createNewInstace();

        let response = await request(app)
            .post("/auth")
            .send({
                email: user.email,
                password: user.password
            });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("token");
    });

    it("should create user and authenticate with valid credentials", async function () {
        let user = UserFactory.init().build();

        let response = await request(app)
            .put("/createAndAuth")
            .send({
                name: user.name,
                email: user.email,
                password: user.password
            });
        expect(response.status).toBe(201);
        expect(response.headers).toHaveProperty("token");
    });

    it("should not authenticate with email invalid", async function () {
        let user = await UserFactory.createNewInstace();

        let response = await request(app)
            .post("/auth")
            .send({
                email: user.email + "_",
                password: user.password
            });
        expect(response.status).toBe(401);
        expect(response.body.message).toEqual("Usuário não encontrado!");
    });

    it("should not authenticate with password invalid", async function () {
        let user = await UserFactory.createNewInstace();

        let response = await request(app)
            .post("/auth")
            .send({
                email: user.email,
                password: user.password + "_"
            });
        expect(response.status).toBe(401);
        expect(response.body.message).toEqual("Senha inválida!");
    });

});
