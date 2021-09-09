let counterValue = 0;

// ------ long way ------

const rob = document.querySelector("[data-action='decrement']");
const add = document.querySelector("[data-action='increment']");

const decrement = () => {
  counterValue -= 1;
  document.getElementById('value').textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  document.getElementById('value').textContent = counterValue;
};

rob.addEventListener('click', decrement);
add.addEventListener('click', increment);

// ------ short way --------

// document.querySelector("[data-action='decrement']")
//   .addEventListener('click', () => {
//     counterValue -= 1;
//     document.getElementById('value').textContent = counterValue;
// });

// document.querySelector("[data-action='increment']")
//   .addEventListener('click', () => {
//     counterValue += 1;
//     document.getElementById('value').textContent = counterValue;
// });
