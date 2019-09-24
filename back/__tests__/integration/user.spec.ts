import {UserMock} from "../mock/userMock";
import {UserBusiness} from "../../src/business/userBusiness";


describe("Create User", function () {
    it("should create an user", async function () {
        let userDTO = UserMock.init().build();
        let user = await (new UserBusiness()).create(userDTO);
        expect(user.name).toBe(userDTO.name);
        expect(user.email).toBe(userDTO.email);
    });
});
