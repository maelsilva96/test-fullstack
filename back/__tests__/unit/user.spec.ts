import {Database} from "../utils/database";
import {UserBusiness} from "../../src/business/userBusiness";
import User from "../../src/models/user";
import {UserMock} from "../mock/userMock";


describe("Create User", function () {
    beforeEach(async () => {
        await Database.Truncate(User);
    });

    it("should not create an user with null name", async function () {
        let userDTO = UserMock.init().setName(null).build();
        expect.assertions(1);
        try {
            await ((new UserBusiness()).create(userDTO));
        } catch (e) {
            expect(e.message).toEqual("Nome obrigatório!");
        }
    });

    it("should not create an user with blank name", async function () {
        let userDTO = UserMock.init().setName("").build();
        expect.assertions(1);
        try {
            await ((new UserBusiness()).create(userDTO));
        } catch (e) {
            expect(e.message).toEqual("Nome obrigatório!");
        }
    });

    it("should not create an user with null email", async function () {
        let userDTO = UserMock.init().setEmail(null).build();
        expect.assertions(1);
        try {
            await ((new UserBusiness()).create(userDTO));
        } catch (e) {
            expect(e.message).toEqual("E-mail obrigatório!");
        }
    });

    it("should not create an user with blank email", async function () {
        let userDTO = UserMock.init().setEmail("").build();
        expect.assertions(1);
        try {
            await ((new UserBusiness()).create(userDTO));
        } catch (e) {
            expect(e.message).toEqual("E-mail obrigatório!");
        }
    });

    it("should not create an user with null password", async function () {
        let userDTO = UserMock.init().setPassword(null).build();
        expect.assertions(1);
        try {
            await ((new UserBusiness()).create(userDTO));
        } catch (e) {
            expect(e.message).toEqual("Senha obrigatória!");
        }
    });

    it("should not create an user with blank password", async function () {
        let userDTO = UserMock.init().setPassword("").build();
        expect.assertions(1);
        try {
            await ((new UserBusiness()).create(userDTO));
        } catch (e) {
            expect(e.message).toEqual("Senha obrigatória!");
        }
    });
});
