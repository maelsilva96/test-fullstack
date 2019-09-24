import {
    Model,
    Association,
    HasManyAddAssociationMixin,
    HasManyGetAssociationsMixin,
    HasManyCreateAssociationMixin, DataTypes
} from "sequelize";
import {LogUser} from "./logUser";
import sequelize from "./index";

class User extends Model {
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

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new DataTypes.STRING(150),
        allowNull: false,
    },
    email: {
        type: new DataTypes.STRING(150),
        allowNull: true
    },
    password: {
        type: new DataTypes.STRING(150),
        allowNull: true
    }
}, {
    tableName: 'user',
    sequelize: sequelize
});

export default User;
