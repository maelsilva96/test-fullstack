import {Router} from 'express';
import * as express from 'express';
import uploads from "./config/upload";
import auth from "./app/middleware/auth";
import authController from "./app/controllers/authController";
import productController from "./app/controllers/productController";
import logUserController from "./app/controllers/logUserController";
import imageController from "./app/controllers/imageController";

const route = Router();

route.post("/auth", authController.login);
route.post("/createAndAuth", authController.createAndAuth);

route.get("/product/list", productController.listAll);
route.use("/files", express.static("tmp/uploads"));

route.use(auth.validToken);

route.get("/logUser/byUser", logUserController.getAllByUser);
route.post("/saveImage", uploads.single("image"), imageController.saveFile);
route.get("/product/:productId", productController.findById);
route.post("/product", productController.create);
route.put("/product/:productId", productController.update);
route.delete("/product/:productId", productController.delete);

export default route;
