document.addEventListener("DOMContentLoaded", function () {
  const forma = document.querySelector("#forma");
  const message = document.querySelector("#message");
  const nombre = document.querySelector("#userName");
  const subjectInput = document.querySelector("#subject");
  const resp = document.querySelector("#resp");

  const validateName = (n) => {
    let isValid = true;
    const pattern = /^[a-zA-Z]+$/;
    if (!pattern.test(n)) {
      isValid = false;
    }
    return isValid;
  };

  forma.addEventListener("submit", (event) => {
    event.preventDefault();
    const userName = nombre.value;
    const userMessage = message.value;
    const subject = subjectInput.value;

    if (!userName.trim()) {
      resp.style.color = "red";
      resp.textContent = "Nombre es requerido ...";
      return;
    } else if (!validateName(userName)) {
      resp.style.color = "red";
      resp.textContent = "Nombre Solo admite Letras";
      return;
    }

    if (!subject.trim()) {
      resp.style.color = "red";
      resp.textContent = "Sujeto es requerido ...";
      return;
    }

    if (!userMessage.trim()) {
      resp.style.color = "red";
      resp.textContent = "Mensaje es requerido ...";
      return;
    }

    resp.style.color = "green";
    resp.textContent = "Enviando info ....";

    forma.reset();
  });

  // Colores
  const cuadroPrincipal = document.getElementById("cuadroPrincipal");
  const colores = document.querySelectorAll(".color");

  colores.forEach((color) => {
    color.addEventListener("click", function () {
      const colorSeleccionado = window.getComputedStyle(color).backgroundColor; // Obtenemos el color computado
      cuadroPrincipal.style.backgroundColor = colorSeleccionado;
    });
  });

  // calculadora
  const num1Input = document.getElementById("num1");
  const num2Input = document.getElementById("num2");
  const resultadoSpan = document.getElementById("resultado");
  const sumarButton = document.getElementById("sumar");
  const restarButton = document.getElementById("restar");
  const multiplicarButton = document.getElementById("multiplicar");
  const dividirButton = document.getElementById("dividir");

  sumarButton.addEventListener("click", function () {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const resultado = num1 + num2;
    resultadoSpan.textContent = resultado;
  });

  restarButton.addEventListener("click", function () {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const resultado = num1 - num2 >= 0 ? num1 - num2 : 0;
    resultadoSpan.textContent = resultado;
  });

  multiplicarButton.addEventListener("click", function () {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const resultado = num1 * num2;
    resultadoSpan.textContent = resultado;
  });

  dividirButton.addEventListener("click", function () {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const resultado = num2 !== 0 ? num1 / num2 : "Indefinido";
    resultadoSpan.textContent = resultado;
  });

});
