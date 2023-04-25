const form = document.querySelector('.login-form');
const formBtn = document.querySelector('[type="submit"]');

form.addEventListener('submit',onFormSubmit);

function onFormSubmit(event){
    event.preventDefault()

const inputEmail = form.elements.email;
const inputPassword = form.elements.password;

if(inputEmail.value === '' ||  inputPassword.value === ''){
   return alert('All fields must be filled!')
}

const date = {
    email:inputEmail.value,
    password:inputPassword.value
}
console.log(date);
form.reset();
}