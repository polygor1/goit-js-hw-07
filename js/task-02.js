const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector("ul#ingredients");

ingredients.forEach(function (ingredient) {
  const item = document.createElement("li");
  item.textContent = ingredient;
  list.append(item);
})