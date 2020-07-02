const categoriesRef = document.querySelector('#categories');

// console.log(categoriesRef);
// console.log(`В списке ${categoriesRef.children.length} категории.`);
// console.log(`Категория: ${categoriesRef.children[0].firstElementChild.textContent}
// Количество элементов: ${categoriesRef.children[0].lastElementChild.children.length}`);

// console.log(`Категория: ${categoriesRef.children[1].firstElementChild.textContent}
// Количество элементов: ${categoriesRef.children[1].lastElementChild.children.length}`);

// console.log(`Категория: ${categoriesRef.children[2].firstElementChild.textContent}
// Количество элементов: ${categoriesRef.children[2].lastElementChild.children.length}`);
const categoriesRef = document.querySelector('#categories');
console.log(`В списке ${categoriesRef.children.length} категории.`);
const liItemRef = categoriesRef.querySelectorAll('li.item');

for (let i = 0; i < liItemRef.length; i += 1) {
  console.log(`Категория: ${liItemRef[i].querySelector('h2').textContent}
  Количество элементов: ${liItemRef[i].querySelector('ul').children.length}`);
}

// console.log(`Категория: ${liItemRef[0].querySelector('h2').textContent}
// Количество элементов: ${liItemRef[0].querySelector('ul').children.length}`);
// console.log(`Категория: ${liItemRef[1].querySelector('h2').textContent}
// Количество элементов: ${liItemRef[1].querySelector('ul').children.length}`);
// console.log(`Категория: ${liItemRef[2].querySelector('h2').textContent}
// Количество элементов: ${liItemRef[2].querySelector('ul').children.length}`);
