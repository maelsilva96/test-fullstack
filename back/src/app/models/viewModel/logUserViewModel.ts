import {UserViewModel} from "./userViewModel";

export class LogUserViewModel {
    public constructor (
        public id: number, public operation: string, public message: string,
        public user: UserViewModel, createdAt: string
    ) {}
}
