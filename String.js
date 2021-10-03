// String

const name1 = 'Copernicus';
const age1 = 37;

// Concatenation
console.log("My name is " + name1 + " and I am " + age);
// My name is Copernicus and I am 37

// Template String
console.log(`My name is ${name1} and I am ${age1}.`);
// My name is Copernicus and I am 37.
const hello = `My name is ${name1} and I am ${age1}.`;
console.log(hello);
// My name is Copernicus and I am 37.

const s = 'Hello World!';
console.log(s.length); 
// 12
console.log(s.toUpperCase());
// HELLO WORLD!
console.log(s.toLowerCase());
// hello world!
console.log(s.substring(0, 5));
// Hello
console.log(s.substring(0, 5).toUpperCase());
// HELLO
console.log(s.split(''));
// prints each letter of string in quotes to the console
const t = 'technology, computers, it, code';
console.log(t.split(', '));
// will print String elements 1 by 1 to console as an array