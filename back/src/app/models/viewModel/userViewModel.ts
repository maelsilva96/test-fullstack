import * as jwt from "jsonwebtoken";

export class UserViewModel {
    public constructor (
        public id: number, public name: string,
        public email: string, public createdAt: string,
        public updatedAt: string
    ) {}

    public generateToken () {
        return jwt.sign({ id: this.id }, process.env.APP_SECRET)
    }
}
