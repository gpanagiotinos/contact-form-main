function hasErrorText(id, value) {
  const element = document.getElementById(`${id}-error`);
  const inputEl = document.getElementById(id);
  if (inputEl) {
  }
  if (value === null || value === "") {
    element.classList.remove("none");
    inputEl ? inputEl.classList.add("error") : "";
  } else {
    element.classList.add("none");
    inputEl ? inputEl.classList.remove("error") : "";
  }
  return;
}
function hasErrorCheckbox(id, value) {
  const element = document.getElementById(`${id}-error`);
  const inputEl = document.getElementById(id);
  if (!value) {
    element.classList.remove("none");
    inputEl.classList.add("error");
  } else {
    element.classList.add("none");
    inputEl.classList.remove("error");
  }
  return;
}
function hasEmailError(value) {
  const emailPattern = /[^@\s]+@[^@\s]+/;
  const requiredError = document.getElementById(`email-required-error`);
  const invalidError = document.getElementById(`email-invalid-error`);
  const inputEl = document.getElementById("emailAddress");
  if (!emailPattern.test(value) || value === null || value === "") {
    inputEl.classList.add("error");
  } else {
    inputEl.classList.remove("error");
  }
  if (!emailPattern.test(value)) {
    invalidError.classList.remove("none");
  } else {
    invalidError.classList.add("none");
  }
  if (value === null || value === "") {
    requiredError.classList.remove("none");
  } else {
    requiredError.classList.add("none");
  }
  return;
}

function submitForm() {
  const toast = document.getElementById("toast");
  toast.classList.add("success");
  return false;
}
function validateForm() {
  const firstName = document.forms["contact-us"]["First Name"].value;
  const lastName = document.forms["contact-us"]["Last Name"].value;
  const email = document.forms["contact-us"]["emailAddress"].value;
  const queryType = document.forms["contact-us"]["query_type"].value;
  const message = document.forms["contact-us"]["message"].value;
  const consentType = document.forms["contact-us"]["consent_type"].checked;
  hasErrorText("firstName", firstName);
  hasErrorText("lastName", lastName);
  hasErrorText("message", message);
  hasErrorText("queryType", queryType);
  hasEmailError(email);
  hasErrorCheckbox("consent", consentType);
  return;
}
