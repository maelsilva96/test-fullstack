import {UserFactory} from "../factories/UserFactory";
import {UserBusiness} from "../../src/app/business/userBusiness";
import {Database} from "../utils/database";
import User from "../../src/app/models/user";
import LogUser from "../../src/app/models/logUser";


describe("Create User", function () {
    beforeEach(async () => {
        await Database.Truncate(LogUser);
        await Database.Truncate(User);
    });

    it("should create an user by Business", async function () {
        let userDTO = UserFactory.init().build();
        let user = await (new UserBusiness()).create(userDTO);
        expect(user.name).toBe(userDTO.name);
        expect(user.email).toBe(userDTO.email);
    });

    it("should not create an user if exist email in data base by Business", async function () {
        let userDTO = await UserFactory.createNewInstace();
        expect.assertions(1);
        try {
            await (new UserBusiness()).create(userDTO);
        } catch (e) {
            expect(e.message).toBe("E-mail já cadastrado!");
        }
    });
});
