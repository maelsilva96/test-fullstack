import * as bcryptjs from "bcryptjs";
import {UserDTO} from "../models/dto/userDTO";
import User from "../models/user";
import {UserViewModel} from "../models/viewModel/userViewModel";
import {ArgumentException} from "../exceptions/argumentException";

export class UserBusiness {
    public async create(userDTO: UserDTO): Promise<UserViewModel> {
        if (userDTO.name == null || !userDTO.name) throw new ArgumentException("Nome obrigatório!");
        if (userDTO.email == null || !userDTO.email) throw new ArgumentException("E-mail obrigatório!");
        if (userDTO.password == null || !userDTO.password) throw new ArgumentException("Senha obrigatória!");

        let user = await User.create({
            name: userDTO.name,
            password: await bcryptjs.hash(userDTO.password, 8),
            email: userDTO.email
        });
        return new UserViewModel(user.id, user.name, user.email, user.createdAt.toISOString(), user.updatedAt.toISOString());
    }
}
