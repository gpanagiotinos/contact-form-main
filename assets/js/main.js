function main() {
  const email = document.forms["contact-us"]["emailAddress"];
  email.oninput = (evt) => {
    this.hasEmailError(evt.target.value);
  };
}
main();
