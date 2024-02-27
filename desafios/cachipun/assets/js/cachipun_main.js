document.getElementById("comenzar").addEventListener("click", function () {
  jugar();
});

function jugar() {
  const jugadasCPU = ["piedra", "papel", "tijera"];

  const jugadaUsuario = prompt("Elige tu jugada (Piedra, Papel, Tijera):")
    .trim()
    .toLowerCase();

  const jugadaCPU = jugadasCPU[Math.floor(Math.random() * 3)];
  let resultado = "";
  if (
    (jugadaUsuario === "piedra" && jugadaCPU === "tijera") ||
    (jugadaUsuario === "papel" && jugadaCPU === "piedra") ||
    (jugadaUsuario === "tijera" && jugadaCPU === "papel")
  ) {
    resultado = "¡Ganaste!";
  } else if (jugadaUsuario === jugadaCPU) {
    resultado = "¡Es un empate!";
  } else {
    resultado = "¡Perdiste!";
  }

  document.getElementById(
    "resultado"
  ).innerHTML += `Tu jugada fue: ${jugadaUsuario}, Jugada de la máquina: ${jugadaCPU}. El resultado: ${resultado}</p>`;
}
