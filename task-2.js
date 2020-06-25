const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];
const ulRef = document.querySelector('#ingredients');
let liRef;
for (const ingredient of ingredients) {
  liRef = document.createElement('li');
  liRef.textContent = ingredient;
  ulRef.append(liRef);
}
console.log(ulRef);
