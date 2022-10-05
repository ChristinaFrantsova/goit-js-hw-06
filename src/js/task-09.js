function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const spun = document.querySelector(".color");
const body = document.querySelector("body");

button.addEventListener("click", onButtonColorChange);

function onButtonColorChange(event) {
  body.style.backgroundColor = getRandomHexColor();
  spun.textContent = getRandomHexColor();
}
