const formulario = document.querySelector("#formulario");
const campoA = document.querySelector("#campoA");
const campoB = document.querySelector("#campoB");
const menInfo = document.querySelector(".menInfo");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  if (parseInt(campoB.value) > parseInt(campoA.value)) { // parseInt PARA CONVERTER EM INT
    menInfo.textContent = "Formulário Válido";
  } else {
    menInfo.textContent = "Formulário Inválido, B tem q ser > que A";
    campoA.value = '';
    campoB.value = '';
  }
});

