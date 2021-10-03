// submitting users to a printed list in the application
const myForm = document.querySelector('#myForm');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    console.log(nameInput.value);
    // will print name just submitted to console
    // without .value it will just print the class but not the actual value

    if(nameInput.value === '' || emailInput.value === '') {
        // if either form field is empty
       // alert('Please enter fields');
       msg.classList.add('error');
       // activates CSS when event occurs
       msg.innerHTML = 'Please enter all fields';

       setTimeout(() => msg.remove(), 3000);
       // will remove error message after 3 seconds
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode( `
        ${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}