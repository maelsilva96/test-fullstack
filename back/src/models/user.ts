import {
    Model,
    Association,
    HasManyAddAssociationMixin,
    HasManyGetAssociationsMixin,
    HasManyCreateAssociationMixin
} from "sequelize";
import {LogUser} from "./logUser";

export class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    public getLogUser!: HasManyGetAssociationsMixin<LogUser>;
    public addLogUser!: HasManyAddAssociationMixin<LogUser, number>;
    public createLogUser!: HasManyCreateAssociationMixin<LogUser>;

    public readonly logs_uesr?: Array<LogUser>;

    public static associations: {
        projects: Association<User, LogUser>;
    };
}


User.hasMany(LogUser, {
    sourceKey: 'id',
    foreignKey: 'user_id',
    as: 'logs_uesr'
});
