export class Database {
    public static async Truncate (model: any) {
        await model.destroy({ truncate: true, force: true });
    }
}
