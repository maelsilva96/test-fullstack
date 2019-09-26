import * as request from "supertest";
import {Database} from "../utils/database";
import Product from "../../src/app/models/product";
import {ProductBusiness} from "../../src/app/business/productBusiness";
import {ProductFactory} from "../factories/productFactory";
import app from "../../src/app";
import {UserFactory} from "../factories/userFactory";
import {UserBusiness} from "../../src/app/business/userBusiness";

describe("List Product", function () {
    beforeEach(async () => {
        await Database.Truncate(Product);
    });

    it("should return all products by Business", async function () {
        let product = await ProductFactory.createNewInstance();
        let products = await (new ProductBusiness()).findAll();
        expect(products[0].name).toBe(product.name);
        expect(products[0].description).toBe(product.description);
        expect(products[0].image).toBe(product.image);
        expect(products[0].evaluation).toBe(product.evaluation);
        expect(products[0]).toHaveProperty("id");
    });

    it("should return all products by Controller", async function () {
        await ProductFactory.createNewInstance();
        let response = await request(app)
            .get("/product/list");
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("products");
    });
});

describe("Create Product", function () {
    beforeEach(async () => {
        await Database.Truncate(Product);
    });

    it("should create product by Business", async function () {
        let productDTO = await ProductFactory.init().build();
        let product = await (new ProductBusiness()).create(productDTO);
        expect(product.name).toBe(productDTO.name);
        expect(product.description).toBe(productDTO.description);
        expect(product.image).toBe(productDTO.image);
        expect(product.evaluation).toBe(productDTO.evaluation);
    });

    it("should not create product by Controller with token invalid", async function () {
        let product = await ProductFactory.init().build();
        let response = await request(app)
            .post("/product")
            .set("Authorization", `Bearer 5587445478`)
            .send({
                name: product.name,
                description: product.description,
                evaluation: product.evaluation,
                image: product.image
            });
        expect(response.statusCode).toBe(401);
    });

    it("should create product by Controller", async function () {
        let user = await UserFactory.init().build();
        let product = await ProductFactory.init().build();
        let userSave = await (new UserBusiness()).create(user);
        let response = await request(app)
            .post("/product")
            .set("Authorization", `Bearer ${userSave.generateToken()}`)
            .send({
                name: product.name,
                description: product.description,
                evaluation: product.evaluation,
                image: product.image
            });
        expect(response.statusCode).toBe(201);
    });
});

describe("Update Product", function () {
    beforeEach(async () => {
        await Database.Truncate(Product);
    });

    it("should update product by Business", async function () {
        let productDTOSave = await ProductFactory.createNewInstanceWithId();
        let productDTO = await ProductFactory.init().setId(productDTOSave.id).buildWithId();
        let product = await (new ProductBusiness()).update(productDTO);

        expect(product.name).toBe(productDTO.name);
        expect(product.description).toBe(productDTO.description);
        expect(product.image).toBe(productDTO.image);
        expect(product.evaluation).toBe(productDTO.evaluation);
    });

    it("should not update product by Controller with token invalid", async function () {
        let product = await ProductFactory.createNewInstanceWithId();
        let response = await request(app)
            .put(`/product/${product.id}`)
            .set("Authorization", `Bearer 5587445478`)
            .send({
                id: product.id,
                name: product.name,
                description: product.description,
                evaluation: product.evaluation,
                image: product.image
            });
        expect(response.statusCode).toBe(401);
    });

    it("should update product by Controller", async function () {
        let user = await UserFactory.init().build();
        let userSave = await (new UserBusiness()).create(user);

        let productDTOSave = await ProductFactory.createNewInstanceWithId();
        let productDTO = await ProductFactory.init().setId(productDTOSave.id).buildWithId();

        let response = await request(app)
            .put(`/product/${productDTOSave.id}`)
            .set("Authorization", `Bearer ${userSave.generateToken()}`)
            .send({
                name: productDTO.name,
                description: productDTO.description,
                evaluation: productDTO.evaluation,
                image: productDTO.image
            });
        expect(response.statusCode).toBe(200);
    });

    it("should not update product not exist by Controller", async function () {
        let user = await UserFactory.init().build();
        let userSave = await (new UserBusiness()).create(user);

        let productDTO = await ProductFactory.init().buildWithId();

        let response = await request(app)
            .put(`/product/${productDTO.id}`)
            .set("Authorization", `Bearer ${userSave.generateToken()}`)
            .send({
                name: productDTO.name,
                description: productDTO.description,
                evaluation: productDTO.evaluation,
                image: productDTO.image
            });
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe("Produto inexistente!");
    });
});


describe("Find Product", function () {
    beforeEach(async () => {
        await Database.Truncate(Product);
    });

    it("should find product by Business", async function () {
        let productDTOSave = await ProductFactory.createNewInstanceWithId();
        let product = await (new ProductBusiness()).findById(productDTOSave.id);

        expect(product.id).toBe(productDTOSave.id);
        expect(product.name).toBe(productDTOSave.name);
        expect(product.description).toBe(productDTOSave.description);
        expect(product.image).toBe(productDTOSave.image);
        expect(product.evaluation).toBe(productDTOSave.evaluation);
    });

    it("should not find product if not exist by Business", async function () {
        expect(1);
        try {
            await (new ProductBusiness()).findById(1);
        } catch (e) {
            expect(e.message).toBe("Produto inexistente!");
        }
    });

    it("should find product by Controller", async function () {
        let user = await UserFactory.init().build();
        let userSave = await (new UserBusiness()).create(user);

        let productDTOSave = await ProductFactory.createNewInstanceWithId();

        let response = await request(app)
            .get(`/product/${productDTOSave.id}`)
            .set("Authorization", `Bearer ${userSave.generateToken()}`);
        expect(response.statusCode).toBe(200);
    });

    it("should not find product if not existe by Controller", async function () {
        let user = await UserFactory.init().build();
        let userSave = await (new UserBusiness()).create(user);

        let response = await request(app)
            .get(`/product/0`)
            .set("Authorization", `Bearer ${userSave.generateToken()}`);
        expect(response.statusCode).toBe(404);
        expect(response.body.message).toBe("Produto inexistente!");
    });
});

describe("Delete Product", function () {
    it("should delete product by Business", async function () {
        let user = await UserFactory.init().build();
        let userSave = await (new UserBusiness()).create(user);

        let productDTOSave = await ProductFactory.createNewInstanceWithId();

        let response = await request(app)
            .delete(`/product/${productDTOSave.id}`)
            .set("Authorization", `Bearer ${userSave.generateToken()}`);
        expect(response.statusCode).toBe(204);
    });

    it("should delete product by Controller", async function () {
        let user = await UserFactory.init().build();
        let userSave = await (new UserBusiness()).create(user);

        let productDTOSave = await ProductFactory.createNewInstanceWithId();

        let response = await request(app)
            .delete(`/product/${productDTOSave.id}`)
            .set("Authorization", `Bearer ${userSave.generateToken()}`);
        expect(response.statusCode).toBe(204);
    });
});
