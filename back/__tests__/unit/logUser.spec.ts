import {LogUserFactory} from "../factories/logUserFactory";
import {LogUserBusiness} from "../../src/app/business/logUserBusiness";

describe("Create Log User", function () {
    it("should not create a log user with blank operation.", async function () {
        let logUserDTO = LogUserFactory.init(0).setOperation("").build();
        expect.assertions(1);
        try {
            await (new LogUserBusiness()).create(logUserDTO);
        } catch (e) {
            expect(e.message).toEqual("Operação obrigatória!");
        }
    });

    it("should not create a log user with null operation.", async function () {
        let logUserDTO = LogUserFactory.init(0).setOperation(null).build();
        expect.assertions(1);
        try {
            await (new LogUserBusiness()).create(logUserDTO);
        } catch (e) {
            expect(e.message).toEqual("Operação obrigatória!");
        }
    });

    it("should not create a log user with blank message.", async function () {
        let logUserDTO = LogUserFactory.init(0).setMessage("").build();
        expect.assertions(1);
        try {
            await (new LogUserBusiness()).create(logUserDTO);
        } catch (e) {
            expect(e.message).toEqual("Mensagem obrigatória!");
        }
    });

    it("should not create a log user with null description.", async function () {
        let logUserDTO = LogUserFactory.init(0).setMessage(null).build();
        expect.assertions(1);
        try {
            await (new LogUserBusiness()).create(logUserDTO);
        } catch (e) {
            expect(e.message).toEqual("Mensagem obrigatória!");
        }
    });
});
