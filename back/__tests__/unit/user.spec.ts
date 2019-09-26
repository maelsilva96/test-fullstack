import {UserBusiness} from "../../src/app/business/userBusiness";
import {UserFactory} from "../factories/UserFactory";


describe("Create User", function () {
    it("should not create an user with null name", async function () {
        let userDTO = UserFactory.init().setName(null).build();
        expect.assertions(1);
        try {
            await ((new UserBusiness()).create(userDTO));
        } catch (e) {
            expect(e.message).toEqual("Nome obrigatório!");
        }
    });

    it("should not create an user with blank name", async function () {
        let userDTO = UserFactory.init().setName("").build();
        expect.assertions(1);
        try {
            await ((new UserBusiness()).create(userDTO));
        } catch (e) {
            expect(e.message).toEqual("Nome obrigatório!");
        }
    });

    it("should not create an user with null email", async function () {
        let userDTO = UserFactory.init().setEmail(null).build();
        expect.assertions(1);
        try {
            await ((new UserBusiness()).create(userDTO));
        } catch (e) {
            expect(e.message).toEqual("E-mail obrigatório!");
        }
    });

    it("should not create an user with blank email", async function () {
        let userDTO = UserFactory.init().setEmail("").build();
        expect.assertions(1);
        try {
            await ((new UserBusiness()).create(userDTO));
        } catch (e) {
            expect(e.message).toEqual("E-mail obrigatório!");
        }
    });

    it("should not create an user with email invalid by Business", async function () {
        let userDTO = UserFactory.init().setEmail("aaa.com").build();
        expect.assertions(1);
        try {
            await (new UserBusiness()).create(userDTO);
        } catch (e) {
            expect(e.message).toBe("E-mail inválido!");
        }
    });

    it("should not create an user with null password", async function () {
        let userDTO = UserFactory.init().setPassword(null).build();
        expect.assertions(1);
        try {
            await ((new UserBusiness()).create(userDTO));
        } catch (e) {
            expect(e.message).toEqual("Senha obrigatória!");
        }
    });

    it("should not create an user with blank password", async function () {
        let userDTO = UserFactory.init().setPassword("").build();
        expect.assertions(1);
        try {
            await ((new UserBusiness()).create(userDTO));
        } catch (e) {
            expect(e.message).toEqual("Senha obrigatória!");
        }
    });
});
