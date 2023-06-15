// =======================================================
const inputRadios = document.querySelectorAll(".form-check-input1");
function hiddenInput() {
  for (let i = 0; i < inputRadios.length; i++) {
    inputRadios[i].classList.add("hidden");
  }
}
function unHiddenInput() {
  for (let i = 0; i < inputRadios.length; i++) {}
}

function changeInputForm(idcauhoi) {
  // get the selected option value
  
  // update the type attribute of the input elements with class "form-check-input1"
  const inputs = document.querySelectorAll(`#idQuestion${idcauhoi} .form-check-input1`);
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].type = typeInput;
    inputs[i].hidden = typeInput === 'text';
  
  }
}
