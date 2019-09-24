import * as bcrypt from "bcryptjs";
import {ArgumentException} from "../../../exceptions/argumentException";

export class UserDTO {
    name: string;
    email: string;
    password: string;

    public async passwordEncrypted (): Promise<string> {
        let salt = await bcrypt.genSalt(8);
        return await bcrypt.hash(this.password, salt);
    }

    public static cast(userData: any): UserDTO {
        if (!userData.name) throw new ArgumentException("Atributo nome não encontrado!");
        if (!userData.email) throw new ArgumentException("Atributo email não encontrado!");
        if (!userData.password) throw new ArgumentException("Atributo senha não encontrado!");
        let user = new UserDTO();
        user.name = userData.name;
        user.email = userData.email;
        user.password = userData.password;
        return user;
    }
}
