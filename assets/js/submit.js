function hasError(id, name) {
  const element = document.getElementById(id);
  console.log(element);
  element.classList.remove("none");
}

function submitForm() {
  const firstName = document.forms["contact-us"]["First Name"].value;
  const lastName = document.forms["contact-us"]["Last Name"].value;
  const queryType = document.forms["contact-us"]["query_type"].value;
  const message = document.forms["contact-us"]["message"].value;
  const consentType = document.forms["contact-us"]["consent_type"].value;
  if (firstName === null || firstName === "") {
    showError("firstName");
  }
  return false;
}
