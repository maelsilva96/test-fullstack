import {DataTypes, Model} from "sequelize";
import sequelize from "./index";
import {ProductViewModel} from "./viewModel/ProductViewModel";

class Product extends Model {
    public id!: number;
    public name!: string;
    public description!: string;
    public image!: string;
    public evaluation!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    public asViewModel(): ProductViewModel {
        return new ProductViewModel(
            this.name, this.description, this.image, this.evaluation,
            this.createdAt.toISOString(), this.updatedAt.toISOString(), this.id
        );
    }
}

Product.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: new DataTypes.STRING(250),
        allowNull: true
    },
    description: {
        type: new DataTypes.STRING(500),
        allowNull: true
    },
    image: {
        type: new DataTypes.STRING(250),
        allowNull: true
    },
    evaluation: {
        type: new DataTypes.NUMBER,
        allowNull: true
    }
}, {
    tableName: 'product',
    sequelize: sequelize
});

export default Product;
