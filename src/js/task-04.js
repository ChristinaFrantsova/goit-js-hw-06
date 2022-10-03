const incrementValueBtn = document.querySelector("[data-action='increment']");
const decrementValueBtn = document.querySelector("[data-action='decrement']");
const totalValue = document.querySelector("#value");

let counterValue = 0;

function onIncrementBtnClick() {
  counterValue += 1;
  totalValue.textContent = counterValue;
  return counterValue;
}

function onDecrementBtnClick() {
  counterValue -= 1;
  totalValue.textContent = counterValue;
  return counterValue;
}

incrementValueBtn.addEventListener("click", onIncrementBtnClick);
decrementValueBtn.addEventListener("click", onDecrementBtnClick);
