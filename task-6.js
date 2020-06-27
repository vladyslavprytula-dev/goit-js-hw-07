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
