const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.getElementById("ingredients");
let items = [];

ingredients.forEach(ingredient => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  items.push(item);
});

list.append(...items);
