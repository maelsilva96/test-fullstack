import {ProductBusiness} from "../business/productBusiness";
import {Request, Response} from "express";

export class ProductController {
    private static productBusiness: ProductBusiness;

    public constructor(productBusiness: ProductBusiness) {
        if (ProductController.productBusiness == null) {
            ProductController.productBusiness = productBusiness;
        }
    }

    public async listAll (req: Request, res: Response): Promise<Response> {
        return res.json();
    }
}

export default (new ProductController(new ProductBusiness()));
