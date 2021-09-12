let input = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

input.oninput = () => input.value === '' ?
    nameOutput.innerHTML = 'незнакомец' :
    nameOutput.innerHTML = input.value;
