import {Router} from 'express';
import authController from "./app/controllers/authController";
import userController from "./app/controllers/userController";
import productController from "./app/controllers/productController";


const route = Router();

route.post("/auth", authController.login);
route.put("/createAndAuth", authController.createAndAuth);


route.get("/product/list", productController.listAll);

export default route;
