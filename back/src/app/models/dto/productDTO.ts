import {ArgumentException} from "../../../exceptions/argumentException";

export class ProductDTO {
    public id?: number;
    public name: string;
    public description: string;
    public image: string;
    public evaluation: number;

    public static cast(productData: any): ProductDTO {
        if (!productData.name) throw new ArgumentException("Atributo nome não encontrado!");
        if (!productData.description) throw new ArgumentException("Atributo descrição não encontrado!");
        if (!productData.image) throw new ArgumentException("Atributo imagem não encontrado!");
        if (!productData.evaluation) throw new ArgumentException("Atributo avaliação não encontrado!");
        let auth = new ProductDTO();
        if (productData.id) {
            auth.id = productData.id;
        }
        auth.name = productData.name;
        auth.description = productData.description;
        auth.image = productData.image;
        auth.evaluation = productData.evaluation;
        return auth;
    }
}
