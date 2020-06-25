{
  /* <div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div> */
}
const inputNumberRef = document.querySelector('#controls').firstElementChild;
const boxes = document.querySelector('#boxes');
const createBoxes = function (amount) {
  for (let i = 1; i <= amount; i += 1) {
    const baseSize = 30;
    function randColor() {
      let r = Math.floor(Math.random() * 256),
        g = Math.floor(Math.random() * 256),
        b = Math.floor(Math.random() * 256);
      return '#' + r.toString(16) + g.toString(16) + b.toString(16);
    }
    const boxesRef = document.createElement('div');
    boxesRef.style.backgroundColor = randColor();
    const boxSize = baseSize + i * 10;
    boxesRef.style.width = `${boxSize}px`;
    boxesRef.style.height = `${boxSize}px`;
    boxes.appendChild(boxesRef);
  }
};
const renderButtonRef = document.querySelector('button[data-action="render"]');
const destroyButtonRef = document.querySelector('button[data-action="destroy"]');
renderButtonRef.addEventListener('click', () => {
  createBoxes(inputNumberRef.value);
});
destroyButtonRef.addEventListener('click', () => {
  boxes.textContent = '';
});
