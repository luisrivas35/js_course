// const factorial = (num) => {
//   let resul = 1;
//   for (let i = 1; i <= num; i++) {
//     resul *= i;
//   }
//   return resul;
// };

// const numuser = +prompt("Ingrese un número del 1 al 20");

// if (numuser >= 1 && numuser <= 20) {
//   console.log("Número válido");

//   for (let i = 1; i <= numuser; i++) {
//     console.log(`${i} x ${numuser} = ${i * numuser}`);
//   }

//   for (let i = 1; i <= numuser; i++) {
//     console.log(`El factorial de ${i} es: ${factorial(i).toLocaleString()}`);
//   }
// } else {
//   console.log("Número no válido");
// }

//operador ternario
// const esMayor = (13 >= 18) ? "Si es mayor" : "No es mayor";
// console.log(esMayor)



// const titulo = document.querySelector("#subtitulo > h2:nth-child(2)" )
// titulo.textContent = "Modificado desde js"
// titulo.classList.add("title")
// titulo.style.color = "blue"

// const titulo = document.querySelector("#texto");
const btnBuscar = document.querySelector("#btnBuscar");
const formulario = document.querySelector("#form");
const mensaje = document.querySelector("#mensaje");
const email = document.querySelector("#email");
const pass = document.querySelector("#pass");

// btnBuscar.addEventListener("click", () => {
//     console.log("hiciste click")
//     console.log(texto.value)
// })

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailCliente = email.value;
  const passCliente = pass.value;

  // mensaje.textContent = ""

  if (!emailCliente.trim()) {
    mensaje.style.color = "red";
    mensaje.textContent = "No escribiste el email";
    return;
  }

  if (!passCliente.trim()) {
    mensaje.style.color = "red";
    mensaje.textContent = "No escribiste contraseña";
    return;
  }

  // validar password length
  if (passCliente.length <= 3) {
    mensaje.textContent = "Mínimo 4 carácteres la contraseña";
    mensaje.style.color = "red";
    return;
  }

  mensaje.style.color = "green";
  mensaje.textContent = "Enviando info ....";

  formulario.reset();
})