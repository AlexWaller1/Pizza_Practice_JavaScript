// Class

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }
    getBirthYear() {
        return `${this.firstName} ${this.lastName}`;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}