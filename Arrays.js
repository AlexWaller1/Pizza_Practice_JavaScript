// Arrays - variables that hold multiple values
const n1 = new Array(1, 2, 3, 4, 5);

console.log(n1);
// [1, 2, 3, 4, 5]

const fruits = ['apples', 'oranges', 'pears', 10, true];
console.log(fruits);
// ["apples", "oranges", "pears", 10, true]
console.log(fruits[1]);
// "oranges"
fruits[5] = 'bananas';
// "bananas" will now print as part of the fruits array
fruits.push('mangos');
// mangos now added to the end of the array
fruits.unshift('strawberries');
// will make "strawberries first element in the array"
fruits.pop();
// will remove last element from the array
console.log(Array.isArray(fruits));
// true
console.log(Array.isArray('hello'));
// false
console.log(fruits.indexOf('oranges'));
// 2

