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

route.get("/logUser/byUser", auth.validToken, logUserController.getAllByUser);
route.post("/saveImage", auth.validToken, uploads.single("image"), imageController.saveFile);
route.get("/product/:productId", auth.validToken, productController.findById);
route.post("/product", auth.validToken, productController.create);
route.put("/product/:productId", auth.validToken, productController.update);
route.delete("/product/:productId", auth.validToken, productController.delete);

export default route;
