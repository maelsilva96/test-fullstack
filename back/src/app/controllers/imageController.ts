import {Request, Response} from "express";

class ImageController {
    private static routeForAccess: string = "/files/";

    public saveFile(req: Request, res: Response) {
        let routeFile = `${process.env.APP_ROUTE}${ImageController.routeForAccess}${req.file.filename}`;
        try {
            return res.status(201).header({
                image: routeFile
            }).json();
        } catch (e) {
            return res.status(400).json({message: e.message});
        }
    }
}

export default (new ImageController());
