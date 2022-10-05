const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  // console.log(event);
  event.preventDefault();
  if (
    event.target.elements.email.value === "" ||
    event.target.elements.password.value === ""
  ) {
    return alert("Дорогий користувач, заповни будь-ласка всі поля !");
  } else {
    const userDataObject = {
      Email: event.target.elements.email.value,
      Password: event.target.elements.password.value,
    };
    console.log(userDataObject);
    event.target.reset();
  }
}
