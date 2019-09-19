
let firstNameValid, lastNameValid, emailValid, notesValid = false;

const onFirstNameInput = () => {
  firstNameValid = (event.target.value.length != 0);
}

const onLastNameInput = () => {
  lastNameValid = (event.target.value.length != 0);
}

const onEmailAddressInput = () => {
  emailValid = (event.target.value.length != 0);
}

const onNotesInput = () => {
  notesValid = (event.target.value.length != 0);
}

const onRegisterClick = () => {
  let msg = document.getElementById("msg");
  if (firstNameValid && lastNameValid && emailValid && notesValid) {
    msg.innerHTML = "Validation successful";
    msg.classList.remove("error-msg");
    msg.classList.add("correct-msg");

  } else {
    msg.classList.remove("correct-msg");
    msg.classList.add("error-msg");
    if (!firstNameValid) {
      msg.innerHTML = "First name cannot be empty";
    }
    if (!lastNameValid) {
      msg.innerHTML = "Last name cannot be empty";
    }
    if (!emailValid) {
      msg.innerHTML = "Email address cannot be empty";
    }
    if (!notesValid) {
      msg.innerHTML = "Notes cannot be empty";
    }
  }
}