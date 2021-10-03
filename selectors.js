console.log(window);
// window is the parent object of the browser
// alert(1) would also work about the same


// Single Element Selectors
console.log(document.getElementById('my-form'));
// form html will print to the console
const form = document.getElementById('my-form');
console.log(form);
console.log(document.querySelector('.container'));
// will print the container element to the console
// only selects the first element that matches the querySelector

// Multiple Element Selectors
console.log(document.querySelectorAll('.item'));
// will return a node list of all item elements from the DOM
console.log(document.getElementsByClassName('item'));
// will return an HTML collection of all item elements from the DOM
console.log(document.getElementsByTagName('li'));
// will return an HTML collection of all li elements from the DOM

// iterating through each element that querySelector gathers
const items = document.querySelector('.item');
items.array.forEach(item => console.log(item));
// will print each item element 1 by 1 to the console

const ul = document.querySelector('.items');

// ul.remove()
// will remove the items from the DOM

ul.lastElementChild.remove();
// will remove the last item element from the DOM
ul.firstElementChild.textContent = 'Hello';
// will change 'item 1' to 'Hello'
ul.children[1].innerText = 'Brad';
// will change 'item 2' to 'Brad'
ul.lastElementChild.innerHTML = '<h4>Hello</h4>'
// will change 'item 3' to 'Hello' with h4 font

const btn = document.querySelector('.btn');
btn.style.background = 'red';
// will change the button to red

btn.addEventListener('click', (e) => {
                           // events need event objects
// besides 'click' we also have actions such as
// 'mouseover'
// 'mouseout'
// 
    e.preventDefault();
    console.log('click');
    console.log(e.target);
    // will show where event takes place in the console
    document.querySelector('#my-form').style.background = '#ccc';
    // will turn form grey when submit button is clicked
    // can also select css elements
});
// event listeners need two parameters, the action and event that will happen
// when that action is chosen

