const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);
function onInputBlur(){
    if (input.value.length < 6){
input.classList.add('invalid');
input.classList.remove('valid');
    } else {
        input.classList.add('valid')
        input.classList.remove('invalid');
    }
}