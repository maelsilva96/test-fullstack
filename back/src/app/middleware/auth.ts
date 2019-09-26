import {NextFunction, Request, Response} from "express";
import * as jwt from "jsonwebtoken";

class Auth {
    public async validToken (req: Request, res: Response, next: NextFunction) {
        let authHeader = req.headers.authorization;

        if (!authHeader) return res.status(401).json({ message: "Token não existente!" });

        const [, token] = authHeader.split(" ");

        try {
            let decoded = await jwt.verify(token, process.env.APP_SECRET);
            //@ts-ignore
            req.body.user_id = decoded.id;
            return next();
        } catch (err) {
            return res.status(401).json({ message: "Token inválido!" });
        }
    }
}

export default (new Auth());
