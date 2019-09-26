import {UserDTO} from "../../src/app/models/dto/userDTO";
import User from "../../src/app/models/user";

const faker = require("faker");

export class UserFactory {

    constructor(public email: string, public password: string, public name?: string) {
    }

    public static init() {
        return new UserFactory(
            faker.internet.email(),
            faker.internet.password(),
            faker.name.findName()
        );
    }

    public static async createNewInstace () : Promise<UserDTO> {
        let fac = UserFactory.init().build();
        let password = await fac.passwordEncrypted();
        await User.create({
            name: fac.name,
            password: password,
            email: fac.email
        });
        return fac;
    }

    public static async createNewInstanceAndReturnId () : Promise<number> {
        let fac = UserFactory.init().build();
        let password = await fac.passwordEncrypted();
        let userSave = await User.create({
            name: fac.name,
            password: password,
            email: fac.email
        });
        return userSave.id;
    }

    public setName(name?: string): UserFactory {
        this.name = name;
        return this;
    }

    public setPassword(password?: string): UserFactory {
        this.password = password;
        return this;
    }

    public setEmail(email?: string): UserFactory {
        this.email = email;
        return this;
    }

    public build(): UserDTO {
        let userDTO = new UserDTO();
        userDTO.name = this.name;
        userDTO.email = this.email;
        userDTO.password = this.password;
        return userDTO;
    }
}
