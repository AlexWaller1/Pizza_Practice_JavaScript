// var, let, const
// don't want to use var because it is global

let age = 30;
age = 31;

console.log(age);

// const can't be directly changed or reassigned like let can
// always use const unless you know the value has to be reassigned
// const must always have a value, it can't be initialized without one

// data types in JavaScript
// String, Numbers, Boolean, null, undefined, Symbol

const name = 'Bodhi'; // String
const jerseyNumber = 37; // Number
const decimal = 9.5; // Number not a double or float
const isCool = true; // boolean
const x = null; // a variable with nothing in it
const y = undefined; // explicitly undefined
const z; // undefined
console.log(typeof name); // String
console.log(typeof jerseyNumber); // number
console.log(decimal); // number
console.log(isCool); // Boolean
console.log(x); // object
console.log(y); // undefined