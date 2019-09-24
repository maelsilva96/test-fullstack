import { Router } from 'express';
import * as UserController from './controllers/userController';


const route = Router();

route.get("/",  UserController.default.create);


export default route;
