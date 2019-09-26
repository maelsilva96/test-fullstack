import {Router} from 'express';
import authController from "./app/controllers/authController";
import userController from "./app/controllers/userController";
import productController from "./app/controllers/productController";
import auth from "./app/middleware/auth";


const route = Router();

route.post("/auth", authController.login);
route.put("/createAndAuth", authController.createAndAuth);


route.get("/product/list", productController.listAll);

route.use(auth.validToken);

route.get("/product/:productId", productController.findById);
route.post("/product", productController.create);
route.put("/product/:productId", productController.update);
route.delete("/product/:productId", productController.delete);

export default route;
