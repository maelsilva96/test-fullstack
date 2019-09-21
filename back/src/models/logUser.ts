import {Association, HasOneGetAssociationMixin, Model} from "sequelize";
import {User} from "./user";

export class LogUser  extends Model {
    public id!: number;
    public user_id!: number;
    public operation!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    public getUser!: HasOneGetAssociationMixin<User>;

    public readonly user: User;

    public static associations: {
        projects: Association<LogUser, User>;
    };
}

LogUser.hasMany(User, {
    sourceKey: 'user_id',
    foreignKey: 'id',
    as: 'user'
});
