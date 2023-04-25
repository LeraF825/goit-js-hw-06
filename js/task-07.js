const input = document.querySelector('#font-size-control');
const textLabel = document.querySelector('#text');

input.addEventListener('input', onInputChange);
function onInputChange(event){
    textLabel.style.fontSize = event.currentTarget.value + "px";
}