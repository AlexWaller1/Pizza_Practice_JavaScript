// Conditionals in JavaScript

const x = 10;
const y = 4;
// == will match regardless of data type
// === has to match both value and data type

if(x == 10) {
    console.log('x is 10');
    // "x is 10" will print to console
}

if(x === 20) {
    console.log('x is not 10');
} else if(x < 10) {
    console.log('x is less than 10');
} else {
    console.log('x is 10');
    // "x is 10" will print to console
}

if(x > 5 || y > 10) {
    // much better than nesting if statements
    console.log('x is more than 5 or y is more than 10');
}

const x2 = 10;

// ternary
const color = x > 10 ? 'red' : 'blue';
// if x is greater than 10, return 'red', else return 'blue'
console.log(color);
// blue

// switches
switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
        // should print color is blue to console
}