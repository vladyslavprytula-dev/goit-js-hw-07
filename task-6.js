{
  /* <input type="text" id="validation-input" data-length="6" placeholder="Введи 6 символов" /> */
}

const validationInputRef = document.querySelector('#validation-input');
console.dir(validationInputRef);
validationInputRef.addEventListener('focus', () => {
  if (event.target.value.length == validationInputRef.dataset.length) {
    validationInputRef.classList.remove('invalid');
    validationInputRef.classList.add('valid');
  } else {
    validationInputRef.classList.remove('valid');
    validationInputRef.classList.add('invalid');
  }
});
