import Product from "../models/product";
import {ProductViewModel} from "../models/viewModel/ProductViewModel";
import {ProductDTO} from "../models/dto/productDTO";
import {ArgumentException} from "../../exceptions/argumentException";

export class ProductBusiness {
    public async findAll(): Promise<Array<ProductViewModel>> {
        let products = await Product.findAll({});
        let productsViewModel: Array<ProductViewModel> = new Array<ProductViewModel>();
        await products.forEach((item, i) => {
            productsViewModel.push(item.asViewModel());
        });
        return productsViewModel;
    }

    public async create(productDTO: ProductDTO) : Promise<ProductViewModel> {
        this.validations(productDTO);
        let product = await Product.create({
            name: productDTO.name,
            description: productDTO.description,
            image: productDTO.image,
            evaluation: productDTO.evaluation
        });

        return product.asViewModel();
    }

    public async update(productDTO: ProductDTO): Promise<ProductViewModel> {
        if (!productDTO.id) throw new ArgumentException("Identificador obrigatório!");
        this.validations(productDTO);
        let save = await Product.update({
            name: productDTO.name,
            description: productDTO.description,
            image: productDTO.image,
            evaluation: productDTO.evaluation
        }, {
            where: {
                id: productDTO.id
            }
        });

        if (save) {
            return await this.findById(productDTO.id);
        } else throw new Error("Houve uma falha ao processar sua requisição!");
    }

    public async findById (id: number): Promise<ProductViewModel> {
        let product = (await Product.findOne({
            where: {
                id: id
            }
        }));
        if (product) return product.asViewModel();
        else throw new Error("Produto inexistente!");
    }

    public async deleteById(id: number): Promise<void> {
        let product = (await Product.destroy({
            where: {
                id: id
            }
        }));
        if (!product) throw new Error("Houve uma falha ao processar sua requisição!");
    }

    private validations (productDTO: ProductDTO): void {
        if (productDTO.name == "" || !productDTO.name) throw new ArgumentException("Nome obrigatório!");
        if (productDTO.description == "" || !productDTO.description) throw new ArgumentException("Descrição obrigatória!");
        if (productDTO.image == "" || !productDTO.image) throw new ArgumentException("Imagem obrigatória!");
        if (!productDTO.evaluation && productDTO.evaluation != 0) throw new ArgumentException("Avaliação obrigatória!");
        if (productDTO.evaluation < 1 || productDTO.evaluation > 5) throw new ArgumentException("Avaliação tem que ser entre 1 e 5!");
    }
}
