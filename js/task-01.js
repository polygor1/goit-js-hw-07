const selectedById = document.querySelector('ul#categories');

const selectedLi = selectedById.querySelectorAll('li.item');

console.log(`В списке ${selectedLi.length} категории`);

selectedLi.forEach(
  categories => console.log(`
    - Категория: ${categories.querySelector('h2').textContent}
    - Количество элементов ${categories.querySelectorAll('li').length}
  `)
);
