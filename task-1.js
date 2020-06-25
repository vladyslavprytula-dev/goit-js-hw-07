const categoriesRef = document.querySelector('#categories');

console.log(categoriesRef);
console.log(`В списке ${categoriesRef.children.length} категории.`);
console.log(`Категория: ${categoriesRef.children[0].firstElementChild.textContent}
Количество элементов: ${categoriesRef.children[0].lastElementChild.children.length}`);

console.log(`Категория: ${categoriesRef.children[1].firstElementChild.textContent}
Количество элементов: ${categoriesRef.children[1].lastElementChild.children.length}`);

console.log(`Категория: ${categoriesRef.children[2].firstElementChild.textContent}
Количество элементов: ${categoriesRef.children[2].lastElementChild.children.length}`);
