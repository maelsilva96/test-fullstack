import {ProductFactory} from "../factories/productFactory";
import {ProductBusiness} from "../../src/app/business/productBusiness";


describe("Create Product", function () {
    it("should not create user with name blank", async function () {
        let productDTO = await ProductFactory.init().setName("").build();
        expect.assertions(1);
        try {
            await (new ProductBusiness()).create(productDTO);
        } catch (e) {
            expect(e.message).toEqual("Nome obrigatório!");
        }
    });

    it("should not create user with name null", async function () {
        let productDTO = await ProductFactory.init().setName(null).build();
        expect.assertions(1);
        try {
            await (new ProductBusiness()).create(productDTO);
        } catch (e) {
            expect(e.message).toEqual("Nome obrigatório!");
        }
    });

    it("should not create user with description blank", async function () {
        let productDTO = await ProductFactory.init().setDescription("").build();
        expect.assertions(1);
        try {
            await (new ProductBusiness()).create(productDTO);
        } catch (e) {
            expect(e.message).toEqual("Descrição obrigatória!");
        }
    });

    it("should not create user with description null", async function () {
        let productDTO = await ProductFactory.init().setDescription(null).build();
        expect.assertions(1);
        try {
            await (new ProductBusiness()).create(productDTO);
        } catch (e) {
            expect(e.message).toEqual("Descrição obrigatória!");
        }
    });

    it("should not create user with image blank", async function () {
        let productDTO = await ProductFactory.init().setImage("").build();
        expect.assertions(1);
        try {
            await (new ProductBusiness()).create(productDTO);
        } catch (e) {
            expect(e.message).toEqual("Imagem obrigatória!");
        }
    });

    it("should not create user with image null", async function () {
        let productDTO = await ProductFactory.init().setImage(null).build();
        expect.assertions(1);
        try {
            await (new ProductBusiness()).create(productDTO);
        } catch (e) {
            expect(e.message).toEqual("Imagem obrigatória!");
        }
    });

    it("should not create user with evaluation less than 1", async function () {
        let productDTO = await ProductFactory.init().setEvaluation(-1).build();
        expect.assertions(1);
        try {
            await (new ProductBusiness()).create(productDTO);
        } catch (e) {
            expect(e.message).toEqual("Avaliação tem que ser entre 1 e 5!");
        }
    });

    it("should not create user with evaluation greater than 5", async function () {
        let productDTO = await ProductFactory.init().setEvaluation(6).build();
        expect.assertions(1);
        try {
            await (new ProductBusiness()).create(productDTO);
        } catch (e) {
            expect(e.message).toEqual("Avaliação tem que ser entre 1 e 5!");
        }
    });

    it("should not create user with evaluation null", async function () {
        let productDTO = await ProductFactory.init().setEvaluation(null).build();
        expect.assertions(1);
        try {
            await (new ProductBusiness()).create(productDTO);
        } catch (e) {
            expect(e.message).toEqual("Avaliação obrigatória!");
        }
    });
});

describe("Update Product", function () {
    it("should not update user with id null", async function () {
        let productDTO = await ProductFactory.init().setId(null).buildWithId();
        expect.assertions(1);
        try {
            await (new ProductBusiness()).update(productDTO);
        } catch (e) {
            expect(e.message).toEqual("Identificador obrigatório!");
        }
    });

    it("should not update user with name blank", async function () {
        let productDTO = await ProductFactory.init().setName("").buildWithId();
        expect.assertions(1);
        try {
            await (new ProductBusiness()).update(productDTO);
        } catch (e) {
            expect(e.message).toEqual("Nome obrigatório!");
        }
    });

    it("should not update user with name null", async function () {
        let productDTO = await ProductFactory.init().setName(null).buildWithId();
        expect.assertions(1);
        try {
            await (new ProductBusiness()).update(productDTO);
        } catch (e) {
            expect(e.message).toEqual("Nome obrigatório!");
        }
    });

    it("should not update user with description blank", async function () {
        let productDTO = await ProductFactory.init().setDescription("").buildWithId();
        expect.assertions(1);
        try {
            await (new ProductBusiness()).update(productDTO);
        } catch (e) {
            expect(e.message).toEqual("Descrição obrigatória!");
        }
    });

    it("should not update user with description null", async function () {
        let productDTO = await ProductFactory.init().setDescription(null).buildWithId();
        expect.assertions(1);
        try {
            await (new ProductBusiness()).update(productDTO);
        } catch (e) {
            expect(e.message).toEqual("Descrição obrigatória!");
        }
    });

    it("should not update user with image blank", async function () {
        let productDTO = await ProductFactory.init().setImage("").buildWithId();
        expect.assertions(1);
        try {
            await (new ProductBusiness()).update(productDTO);
        } catch (e) {
            expect(e.message).toEqual("Imagem obrigatória!");
        }
    });

    it("should not update user with image null", async function () {
        let productDTO = await ProductFactory.init().setImage(null).buildWithId();
        expect.assertions(1);
        try {
            await (new ProductBusiness()).update(productDTO);
        } catch (e) {
            expect(e.message).toEqual("Imagem obrigatória!");
        }
    });

    it("should not update user with evaluation less than 1", async function () {
        let productDTO = await ProductFactory.init().setEvaluation(-1).buildWithId();
        expect.assertions(1);
        try {
            await (new ProductBusiness()).update(productDTO);
        } catch (e) {
            expect(e.message).toEqual("Avaliação tem que ser entre 1 e 5!");
        }
    });

    it("should not update user with evaluation greater than 5", async function () {
        let productDTO = await ProductFactory.init().setEvaluation(6).buildWithId();
        expect.assertions(1);
        try {
            await (new ProductBusiness()).update(productDTO);
        } catch (e) {
            expect(e.message).toEqual("Avaliação tem que ser entre 1 e 5!");
        }
    });

    it("should not update user with evaluation null", async function () {
        let productDTO = await ProductFactory.init().setEvaluation(null).buildWithId();
        expect.assertions(1);
        try {
            await (new ProductBusiness()).update(productDTO);
        } catch (e) {
            expect(e.message).toEqual("Avaliação obrigatória!");
        }
    });
});
