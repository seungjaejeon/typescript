interface User{
    firstName : string,
    lastName : string,
    sayHi(name:string) : string,
    fullName() : string
}
class Player2 implements User {
    constructor(
        public firstName: string,
        public lastName : string
    ){}
    fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string) {
        return `Hello my name is ${name}`
    }
}