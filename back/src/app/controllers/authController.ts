import {UserBusiness} from "../business/userBusiness";
import {Request, Response} from "express";
import {UserDTO} from "../models/dto/userDTO";
import {AuthDTO} from "../models/dto/authDTO";


class AuthController {
    private static userBusiness: UserBusiness;

    public constructor(userBusiness: UserBusiness) {
        if (AuthController.userBusiness == null) {
            AuthController.userBusiness = userBusiness;
        }
    }

    public async login(req: Request, res: Response): Promise<Response> {
        let userData = req.body;
        try {
            let user = await AuthController.userBusiness.findByEmailAndPassword(AuthDTO.cast(userData));
            return res.status(200).json({
                user: user,
                token: await user.generateToken()
            });
        } catch (e) {
            return res.status(400).json({message: e.message});
        }
    }

    public async createAndAuth(req: Request, res: Response): Promise<Response> {
        let userData = req.body;
        try {
            let user = await AuthController.userBusiness.create(UserDTO.cast(userData));
            res.setHeader("token", await user.generateToken());
            return res.status(201).json();
        } catch (e) {
            return res.status(400).json({message: e.message});
        }
    }
}

export default new AuthController(new UserBusiness());
