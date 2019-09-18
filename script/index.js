
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
    msg.innerHTML = "Validation successful"
    msg.classList.remove("error-msg");
    msg.classList.add("correct-msg");

    let inputBoxes = document.getElementsByTagName("input");
    inputBoxes.push(document.getElementsByTagName("textarea"));
    for (inputBox in inputBoxes) {
      inputBox.classList.remove("err-placeholder");
    }
  } else {
    msg.innerHTML = "Check your input again";
    msg.classList.remove("correct-msg");
    msg.classList.add("error-msg");
    if (!firstNameValid) {
      let firstNameInputBox = document.getElementById("input-first-name");
      firstNameInputBox.placeholder = "First name cannot be empty";
      firstNameInputBox.classList.add("err-placeholder");
    }
    if (!lastNameValid) {
      let lastNameInputBox = document.getElementById("input-last-name");
      lastNameInputBox.placeholder = "Last name cannot be empty";
      lastNameInputBox.classList.add("err-placeholder");
    }
    if (!emailValid) {
      let emailAddressInputBox = document.getElementById("input-email-address");
      emailAddressInputBox.placeholder = "Email address cannot be empty";
      emailAddressInputBox.classList.add("err-placeholder");
    }
    if (!notesValid) {
      let notesInputBox = document.getElementById("input-notes");
      notesInputBox.placeholder = "Notes cannot be empty";
      notesInputBox.classList.add("err-placeholder");
    }
  }
}