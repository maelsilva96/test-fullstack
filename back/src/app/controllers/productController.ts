import {ProductBusiness} from "../business/productBusiness";
import {Request, Response} from "express";
import {ProductDTO} from "../models/dto/productDTO";

export class ProductController {
    private static productBusiness: ProductBusiness;

    public constructor(productBusiness: ProductBusiness) {
        if (ProductController.productBusiness == null) {
            ProductController.productBusiness = productBusiness;
        }
    }

    public async listAll (req: Request, res: Response): Promise<Response> {
        try {
            let products = ProductController.productBusiness.findAll();
            return res.status(200).json({
                products: products
            });
        } catch (e) {
            return res.status(400).json({message: e.message});
        }
    }

    public async create (req: Request, res: Response): Promise<Response> {
        try {
            await ProductController.productBusiness.create(ProductDTO.cast(req.body));
            return res.status(201).json();
        } catch (e) {
            return res.status(400).json({message: e.message});
        }
    }

    public async update (req: Request, res: Response): Promise<Response> {
        try {
            let productDTO = ProductDTO.cast(req.body);
            productDTO.id = parseInt(req.params.productId);
            let product = await ProductController.productBusiness.update(productDTO);
            return res.status(200).json({
                product: product
            });
        } catch (e) {
            return res.status(400).json({message: e.message});
        }
    }

    public async findById(req: Request, res: Response): Promise<Response> {
        try {
            let product = await ProductController.productBusiness.findById(parseInt(req.params.productId));
            return res.status(200).json({
                product: product
            });
        } catch (e) {
            return res.status(404).json({message: e.message});
        }
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        try {
            await ProductController.productBusiness.deleteById(parseInt(req.params.productId));
            return res.status(204).json();
        } catch (e) {
            return res.status(404).json({message: e.message});
        }
    }
}

export default (new ProductController(new ProductBusiness()));
