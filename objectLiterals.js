// Object Literals
const person37 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Somerville',
        state: 'NJ'
    }
}

console.log(person37);
// will print out above information to the console
console.log(person37.firstName);
// John
console.log(person37.firstName, person37.lastName);
// John Doe
console.log(person37.hobbies[1]);
// movies
const { firstName, lastName, address: { city } } = person37;
console.log(firstName);
// John
console.log(city);
// Somerville
person37.email = 'john@gmail.com';
console.log(person37);
// email now added to the person37 object
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Wash the dishes',
        isCompleted: false
    }
]

console.log(todos);
// prints out the above array of objects
console.log(todos[1].text);
// Wash the dishes
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
// will print out JSON string of the array to the console

// For Loops
for(let i = 0; i < 3; i++) {
    console.log(`For Loop Number ${i}`);
    // For Loop Number 1
    // For Loop Number 2
    
}

// While Loop
let hh1 = 0;
while(hh1 < 3) {
    console.log(`While Loop Number: ${hh1}`);
    i++;
}
// While Loop Number: 1
// While Loop Number: 2

// Looping Through Arrays
for(let todo of todos) {
    console.log(todo);
    // will print out each element of the todos array to the console
    // could also just print out certain attributes like console.log(todo.text);

}

// forEach, map, filter

// forEach
todos.forEach(function(todo) {
    console.log(todo.text);
    // will print out each text element
});

// map
// will actually return an array
const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);
// ["Take out the trash", "Wash the dishes"]

// Filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});

console.log(todoCompleted);
// will return elements of array where isCompleted boolean
// evaluates to true

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
    // will return array of the text attribute of the array elements
    // that evaluate to true
})
