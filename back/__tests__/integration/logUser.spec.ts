import * as request from "supertest";
import {Database} from "../utils/database";
import {UserFactory} from "../factories/userFactory";
import {UserBusiness} from "../../src/app/business/userBusiness";
import {LogUserFactory} from "../factories/logUserFactory";
import {LogUserBusiness} from "../../src/app/business/logUserBusiness";
import LogUser from "../../src/app/models/logUser";
import User from "../../src/app/models/user";
import app from "../../src/app";

describe("Create Log User", function () {
    beforeEach(async () => {
        await Database.Truncate(LogUser);
        await Database.Truncate(User);
    });

    it("should create a log user by Business", async function () {
        let userId = await UserFactory.createNewInstanceAndReturnId();
        let logUserDTO = LogUserFactory.init(userId).build();
        let logUserSave = await (new LogUserBusiness()).create(logUserDTO);
        expect(logUserSave.user.id).toBe(logUserDTO.userId);
        expect(logUserSave.operation).toBe(logUserDTO.operation);
        expect(logUserSave.message).toBe(logUserDTO.message);
    });

    it("should list log users if logged with credentials valid by Business", async function () {
        let user = await UserFactory.init().build();
        let userSave = await (new UserBusiness()).create(user);
        let userLog = await LogUser.create({
            user_id: userSave.id,
            operation: "Criou",
            message: "Teste"
        });

        let response = await request(app)
            .get(`/logUser/byUser`)
            .set("Authorization", `Bearer ${userSave.generateToken()}`);
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("logsUser");
        expect(response.body.logsUser[0].operation).toBe(userLog.operation);
        expect(response.body.logsUser[0].message).toBe(userLog.message);
        expect(response.body.logsUser[0].user.id).toBe(userLog.user_id);
    });

    it("should not list log users if logged with credentials invalid by Business", async function () {
        let user = await UserFactory.init().build();
        let userSave = await (new UserBusiness()).create(user);
        let userLog = await LogUser.create({
            user_id: userSave.id,
            operation: "Criou",
            message: "Teste"
        });

        let response = await request(app)
            .get(`/logUser/byUser`)
            .set("Authorization", `Bearer 154478778`);
        expect(response.statusCode).toBe(401);
    });
});
