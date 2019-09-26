import {UserDTO} from "../models/dto/userDTO";
import User from "../models/user";
import {UserViewModel} from "../models/viewModel/userViewModel";
import {ArgumentException} from "../../exceptions/argumentException";
import {AuthDTO} from "../models/dto/authDTO";

export class UserBusiness {
    public async create(userDTO: UserDTO): Promise<UserViewModel> {
        if (userDTO.name == null || !userDTO.name) throw new ArgumentException("Nome obrigatório!");
        if (userDTO.email == null || !userDTO.email) throw new ArgumentException("E-mail obrigatório!");
        if (userDTO.password == null || !userDTO.password) throw new ArgumentException("Senha obrigatória!");

        let user = await User.create({
            name: userDTO.name,
            password: await userDTO.passwordEncrypted(),
            email: userDTO.email
        });
        return user.asViewModel();
    }

    public async findByEmailAndPassword(userAuth: AuthDTO): Promise<UserViewModel> {
        let {email, password} = userAuth;
        let user = await User.findOne({where: {email}});

        if (!user) throw new Error("Usuário não encontrado!");
        if (!await user.checkPassword(password)) throw new Error("Senha inválida!");

        return user.asViewModel();
    }
}
