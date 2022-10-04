const input = document.querySelector("#validation-input");
// console.log(input.getAttribute("data-length"));
input.addEventListener("blur", onInputValitation);

function onInputValitation(event) {
  console.dir(event);
  //   const { value, dataset, classList } = event.target;
  if (event.target.value.length === Number(event.target.dataset.length)) {
    event.target.classList.remove("invalid");
    event.target.classList.add("valid");
  } else {
    // classList.remove("valid");
    event.target.classList.add("invalid");
  }
}
