import {DataTypes, Model} from "sequelize";
import sequelize from "./index";
import User from "./user";
import {LogUserViewModel} from "./viewModel/logUserViewModel";

export class LogUser extends Model {
    public id!: number;
    public user_id!: number;
    public operation!: string;
    public message!: string;

    public readonly createdAt!: Date;

    public readonly user: User;

    private async getUser(): Promise<User> {
        return await User.findOne({
            where: {
                id: this.user_id
            }
        })
    }

    public async asViewModel() {
        return new LogUserViewModel(
            this.id, this.operation, this.message,
            (await this.getUser()).asViewModel(), this.createdAt.toISOString()
        );
    }
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

export default LogUser;
