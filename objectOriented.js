// Object Oriented JavaScript

// Constructor Function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    // can do lots of cool stuff with a Date object
    // this refers to the current object
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Instantiate Object
const person1 = new Person('John', 'Doe', '4-3-1980');

console.log(person1);
// will print that object to the console
console.log(person1.getBirthYear());
// will print 1980 to the console
console.log(person1.getFullName());
// will print John Doe to console