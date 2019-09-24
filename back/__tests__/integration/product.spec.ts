import {Database} from "../utils/database";
import Product from "../../src/app/models/product";

describe("Create Product", function () {
    beforeEach(async () => {
        await Database.Truncate(Product);
    });
});
