import {ProductBusiness} from "../business/productBusiness";
import {Request, Response} from "express";
import {ProductDTO} from "../models/dto/productDTO";
import {LogUserBusiness} from "../business/logUserBusiness";
import {LogUserDTO} from "../models/dto/logUserDTO";

export class ProductController {
    private static logUserBusiness: LogUserBusiness;
    private static productBusiness: ProductBusiness;

    public constructor(productBusiness: ProductBusiness, logUserBusiness: LogUserBusiness) {
        if (ProductController.productBusiness == null) {
            ProductController.productBusiness = productBusiness;
        }
        if (ProductController.logUserBusiness == null) {
            ProductController.logUserBusiness = logUserBusiness;
        }
    }

    public async listAll (req: Request, res: Response): Promise<Response> {
        try {
            let products = await ProductController.productBusiness.findAll();
            return res.status(200).json({
                products: products
            });
        } catch (e) {
            return res.status(400).json({message: e.message});
        }
    }

    public async create (req: Request, res: Response): Promise<Response> {
        try {
            let product = await ProductController.productBusiness.create(ProductDTO.cast(req.body));
            await ProductController.logUserBusiness.create(new LogUserDTO(
                parseInt(req.body.user_id), "Criar",
                `Usuário criou o produto ${product.name}.`
            ));
            res.setHeader('id', product.id);
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
            await ProductController.logUserBusiness.create(new LogUserDTO(
                parseInt(req.body.user_id), "Atualizar",
                `Usuário atualizou o produto ${product.name}.`
            ));
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
            await ProductController.logUserBusiness.create(new LogUserDTO(
                parseInt(req.body.user_id), "Deletar",
                `Usuário removeu o produto ${req.params.prodictId}.`
            ));
            return res.status(204).json();
        } catch (e) {
            return res.status(404).json({message: e.message});
        }
    }
}

export default (new ProductController(new ProductBusiness(), new LogUserBusiness()));
