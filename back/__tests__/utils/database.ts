import sequelize from "../../src/app/models";

export class Database {
    public static async Truncate(model: any) {
        try {
            await sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
            await model.destroy({truncate: {cascade: true}, force: true});
            await sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
        } catch (e) {
            console.log(e);
        }
    }
}
