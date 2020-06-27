const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];
// const ulRef = document.querySelector('#ingredients');
// let liRef;
// for (const ingredient of ingredients) {
//   liRef = document.createElement('li');
//   liRef.textContent = ingredient;
//   ulRef.append(liRef);
// }
// console.log(ulRef);

const createLiIngredients = ingredient => {
  const liRef = document.createElement('li');
  liRef.textContent = ingredient;
  return liRef;
};

const LiIngredients = ingredients.map(ingredient => createLiIngredients(ingredient));
const ulRef = document.querySelector('#ingredients');
ulRef.append(...LiIngredients);

//====================Какой вариант лучше использовать?==========================================
