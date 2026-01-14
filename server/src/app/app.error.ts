export class UserError extends Error {
    constructor(name: string) {
        super(name);
    }
}