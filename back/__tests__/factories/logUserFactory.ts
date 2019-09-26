import {LogUserDTO} from "../../src/app/models/dto/logUserDTO";

const faker = require("faker");

export class LogUserFactory {

    public constructor(public userId: number, public operation: string, public message: string) {
    }

    public static init(userId: number) {
        return new LogUserFactory(userId, faker.random.words(), faker.random.words())
    }

    public setOperation (opration?: string) {
        this.operation = opration;
        return this;
    }

    public setMessage (message?: string) {
        this.message = message;
        return this;
    }

    public build (): LogUserDTO {
        return new LogUserDTO(
            this.userId, this.operation, this.message
        );
    }
}
