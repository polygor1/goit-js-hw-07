let fontSizeControl = document.getElementById("font-size-control");
let text = document.getElementById("text");

fontSizeControl.oninput = () => text.style.fontSize = fontSizeControl.value + "px";
