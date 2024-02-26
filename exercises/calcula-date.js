const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese la cantidad de días: ", (dias) => {
  
  dias = parseInt(dias);

  const anos = Math.floor(dias / 365);
  const diasRestantes = dias % 365;
  const semanas = Math.floor(diasRestantes / 7);
  const diasFinales = diasRestantes % 7;

  console.log(`\n${dias} días equivalen a:`);
  console.log(`${anos} año(s), ${semanas} semana(s) y ${diasFinales} día(s)`);

  rl.close();
});
