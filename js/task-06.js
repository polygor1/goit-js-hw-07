let inputVal = document.getElementById("validation-input");

inputVal.style.cssText = `
#validation-input {
  border: 3px solid #bdbdbd;
}
#validation-input.valid {
  border-color: #4caf50;
}
#validation-input.invalid {
  border-color: #f44336;
}`;

inputVal.onblur = function () {
  inputVal.classList.remove("valid");
  inputVal.classList.remove("invalid");

  inputVal.value.length === Number(inputVal.dataset.length) ? 
    inputVal.classList.add("valid") :
    inputVal.classList.add("invalid");
};

