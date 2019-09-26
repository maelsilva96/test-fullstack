export class Database {
    public static async Truncate (model: any) {
        await model.destroy({ truncate: { cascade: true }, force: true });
    }
}
