import {UserFactory} from "../factories/UserFactory";
import {UserBusiness} from "../../src/app/business/userBusiness";
import {Database} from "../utils/database";
import User from "../../src/app/models/user";


describe("Create User", function () {
    beforeEach(async () => {
        await Database.Truncate(User);
    });

    it("should create an user by Business", async function () {
        let userDTO = UserFactory.init().build();
        let user = await (new UserBusiness()).create(userDTO);
        expect(user.name).toBe(userDTO.name);
        expect(user.email).toBe(userDTO.email);
    });
});
