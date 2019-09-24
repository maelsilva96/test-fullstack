import {Request, Response} from "express";
import {UserBusiness} from "../business/userBusiness";

class UserController {
    public constructor (private userBusiness: UserBusiness) {}

    public async create (req: Request, res: Response) : Promise<Response> {
        return res.json();
    }
}

export default (new UserController(new UserBusiness()));
