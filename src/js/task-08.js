const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (event.target.email.value === "" || event.target.password.value === "") {
    return alert("Дорогий користувач, заповни будь-ласка всі поля !");
  } else {
    let userDataObject = {
      Email: event.target.email.value,
      Password: event.target.password.value,
    };
    console.log(userDataObject);
    event.target.reset();
  }
}
