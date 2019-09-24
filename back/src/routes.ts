import { Router } from 'express';
import authController from "./app/controllers/authController";
import userController from "./app/controllers/userController";


const route = Router();

route.post("/auth",  authController.login);
route.put("/createAndAuth",  authController.createAndAuth);


route.post("/user/register",  userController.create);

export default route;
