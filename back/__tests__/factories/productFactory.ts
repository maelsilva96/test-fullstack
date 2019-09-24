import {ProductDTO} from "../../src/app/models/dto/productDTO";
import Product from "../../src/app/models/product";

const faker = require("faker");

export class ProductFactory {

    constructor(
        public name: string, public description: string, public evaluation: number, public image: string
    ) {
    }

    public static init() {
        return new ProductFactory(
            faker.name.findName(),
            faker.name.jobDescription(),
            faker.random.number(),
            faker.random.imageURL
        );
    }

    public static async createNewInstace(): Promise<ProductDTO> {
        let fac = ProductFactory.init().build();
        await Product.create({
            name: fac.name,
            description: fac.description,
            evaluation: fac.evaluation,
            image: fac.image
        });
        return fac;
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
        return userDTO;
    }
}
