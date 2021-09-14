let render = document.querySelector('[data-action="render"]');
let destroy = document.querySelector('[data-action="destroy"]');
let boxes = document.getElementById('boxes');

render.addEventListener('click', getAmount);
destroy.addEventListener('click', destroyBoxes);

const rndColor = () => Math.floor(Math.random() * 256);

function getAmount() {
  let amount = document.querySelector('input').value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const boxSize = 30;
  let fragment = document.createDocumentFragment();
  
  for (let i = 0; i < amount; i++) {
    let size = boxSize + i * 10;
    let newDiv = document.createElement('div');
    newDiv.style.cssText = `
    width: ${size}px; 
    height: ${size}px; 
    background-color: rgba( ${rndColor()}, ${rndColor()}, ${rndColor()}, ${Math.random()} )
    `;
    fragment.appendChild(newDiv);
  }

  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

