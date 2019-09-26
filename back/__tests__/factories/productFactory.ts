import {ProductDTO} from "../../src/app/models/dto/productDTO";
import Product from "../../src/app/models/product";

const faker = require("faker");

export class ProductFactory {

    constructor(
        public id: number, public name: string, public description: string, public evaluation: number, public image: string
    ) {
    }

    public static init() {
        return new ProductFactory(
            faker.random.number(),
            faker.name.findName(),
            faker.random.words(),
            faker.random.number({min:1, max:5}),
            faker.image.imageUrl()
        );
    }

    public static async createNewInstance(): Promise<ProductDTO> {
        let fac = ProductFactory.init().build();
        await Product.create({
            name: fac.name,
            description: fac.description,
            evaluation: fac.evaluation,
            image: fac.image
        });
        return fac;
    }

    public static async createNewInstanceWithId(): Promise<ProductDTO> {
        let fac = ProductFactory.init().build();
        let product = await Product.create({
            name: fac.name,
            description: fac.description,
            evaluation: fac.evaluation,
            image: fac.image
        });
        fac.id = product.id;
        return fac;
    }

    public setId(id?: number): ProductFactory {
        this.id = id;
        return this;
    }

    public setName(name?: string): ProductFactory {
        this.name = name;
        return this;
    }

    public setDescription (description?: string): ProductFactory {
        this.description = description;
        return this;
    }

    public setEvaluation(evaluation?: number): ProductFactory {
        this.evaluation = evaluation;
        return this;
    }

    public setImage(image?: string): ProductFactory {
        this.image = image;
        return this;
    }

    public build(): ProductDTO {
        let userDTO = new ProductDTO();
        userDTO.name = this.name;
        userDTO.description = this.description;
        userDTO.image = this.image;
        userDTO.evaluation = this.evaluation;
        return userDTO;
    }

    public buildWithId(): ProductDTO {
        let userDTO = new ProductDTO();
        userDTO.id = this.id;
        userDTO.name = this.name;
        userDTO.description = this.description;
        userDTO.image = this.image;
        userDTO.evaluation = this.evaluation;
        return userDTO;
    }
}
