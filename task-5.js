const inputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');
inputRef.addEventListener('input', () => {
  if (inputRef.value !== '') {
    nameOutputRef.textContent = inputRef.value;
  }
});
