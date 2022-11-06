class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName,
            this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    };
    setfullName(value) {
        let parts = value.split(" ");
        if (parts.length !== 2) {
            throw new Error("Error-Full Name is not valid!");
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    };
}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
// function createPerson(firstName, lastName) {
//     return {
//         firstName,
//         lastName,
//         get fullName() {
//             return this._firstName;
//         },
//         set fullName(value) {
//             let parts = value.split(" ");
//             if (parts.length !== 2) {
//                 throw new Error("Error-Full Name is not valid!");
//             }
//             this.firstName = parts[0];
//             this.lastName = parts[1];
//         }
//     }
// }