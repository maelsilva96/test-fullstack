import {Association, DataTypes, HasOneGetAssociationMixin, Model} from "sequelize";
import sequelize from "./index";
import User from "./user";

export class LogUser extends Model {
    public id!: number;
    public user_id!: number;
    public operation!: string;
    public message!: string;

    public readonly createdAt!: Date;

    public getUser!: HasOneGetAssociationMixin<User>;

    public readonly user: User;

    public static associations: {
        projects: Association<LogUser, User>;
    };
}

LogUser.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    operation: {
        type: new DataTypes.STRING(50),
        allowNull: true
    },
    message: {
        type: new DataTypes.STRING(150),
        allowNull: true
    }
}, {
    tableName: 'log_user',
    sequelize: sequelize
});

LogUser.belongsTo(User, { targetKey: "id" });

export default LogUser;
