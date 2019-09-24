import {Model} from "sequelize";

export class Product extends Model {
    public id!: number;
    public name!: string;
    public description!: string;
    public image!: string;
    public evaluation!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}
