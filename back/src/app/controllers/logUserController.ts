import {LogUserBusiness} from "../business/logUserBusiness";
import {Request, Response} from "express";

class LogUserController {
    private static logUserBusiness: LogUserBusiness;

    public constructor(logUserBusiness: LogUserBusiness) {
        if (LogUserController.logUserBusiness == null) {
            LogUserController.logUserBusiness = logUserBusiness;
        }
    }

    public async getAllByUser (req: Request, res: Response): Promise<Response> {
        try {
            let logs = await LogUserController.logUserBusiness.getAllByUerId(parseInt(req.body.user_id));
            return res.status(200).json({
                logsUser: logs
            })
        } catch (e) {
            return res.status(401).json({message: e.message});
        }
    }
}

export default (new LogUserController(new LogUserBusiness()));
