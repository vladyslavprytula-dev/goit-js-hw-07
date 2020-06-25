let counterValue = 0;
const decrementButtonRef = document.querySelector('#counter button[data-action="decrement"]');
const incrementButtonRef = document.querySelector('#counter button[data-action="increment"]');
const valueRef = document.querySelector('#value');
decrementButtonRef.addEventListener('click', () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});
incrementButtonRef.addEventListener('click', () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});
