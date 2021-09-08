const selected = document
  .querySelector('ul#categories')
  .querySelectorAll('li.item');

console.log(`В списке ${selected.length} категории`);

selected.forEach(
  categories => console.log(`- Категория: ${categories.querySelector('h2').textContent}
- Количество элементов ${categories.querySelectorAll('li').length}`)
);
