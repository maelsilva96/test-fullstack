const faker = require("faker");

export class UserMock {
    constructor (public email: string, public password: string, public name?: string) {}

    public static init () {
        return new UserMock(
            faker.internet.email(),
            faker.internet.password(),
            faker.name.findName()
        );
    }

    public setName (name?: string) : UserMock {
        this.name = name;
        return this;
    }

    public setPassword (password?: string) : UserMock {
        this.password = password;
        return this;
    }

    public setEmail (email?: string) : UserMock {
        this.email = email;
        return this;
    }

    public build () {
        return {
            name: this.name,
            password: this.password,
            email: this.email
        };
    }
}
