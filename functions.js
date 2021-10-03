// functions

function addNums(num1 = 1, num2 = 2) {
    // default values in case no numbers are given when function is called
    console.log(num1 + num2);
}

addNums(5, 4);
// 9 should print to console
// will overwrite the default values

function addNums2(num1 = 1, num2 = 2) {
    return num1 + num2;
}

console.log(addNums(5, 5));
// 10 should print to console

// Arrow Functions

const addNums3 = (num1 = 1, num2 = 1) => num1 + num2;
// function name // function parameters  // function return
console.log(addNums(5, 5));
// should print 10 to console