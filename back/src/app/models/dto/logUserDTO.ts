export class LogUserDTO {
    public constructor (
        public userId: number, public operation: string, public message: string
    ) {}
}
