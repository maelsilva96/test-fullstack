import {ArgumentException} from "../../../exceptions/argumentException";

export class AuthDTO {
    public email: string;
    public password: string;

    public static cast(userData: any): AuthDTO {
        if (!userData.email) throw new ArgumentException("Atributo email não encontrado!");
        if (!userData.password) throw new ArgumentException("Atributo senha não encontrado!");
        let auth = new AuthDTO();
        auth.email = userData.email;
        auth.password = userData.password;
        return auth;
    }
}
