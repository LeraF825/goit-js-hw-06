const input = document.querySelector('#validation-input');

input.addEventListener('blur', ()=>{
    const validationSym = input.value.length;
    const lengthSym = Number(input.getAttribute("data-length"));
  
      if (validationSym === lengthSym){
        input.classList.add('valid');
        input.classList.remove('invalid');
      } else {
        input.classList.add('invalid');
        input.classList.remove('valid'); 
      }
});


