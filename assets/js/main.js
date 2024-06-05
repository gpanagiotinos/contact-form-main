function onClickQueryType(element, inputId, unCheckedEl) {
  const input = document.querySelector(`#${inputId}`);
  unCheckedEl.classList.remove("label-checked");
  if (input) {
    element.classList.add("label-checked");
    input.checked = true;
  }
}
function main() {
  const generalEnquiryEl = document.querySelector("#label-generalEnquiry");
  const supportRequestEl = document.querySelector("#label-supportRequest");
  const formEl = document.querySelector("#form-contact-us");
  generalEnquiryEl.onclick = onClickQueryType.bind(
    this.onClickQueryType,
    generalEnquiryEl,
    "generalEnquiry",
    supportRequestEl
  );
  supportRequestEl.onclick = onClickQueryType.bind(
    this.onClickQueryType,
    supportRequestEl,
    "supportRequest",
    generalEnquiryEl
  );
}
main();
