const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Temperatura en grados Celsius: ", (celsius) => {
  
  celsius = parseFloat(celsius);
  
  const kelvin = celsius + 273.15;
  const fahrenheit = (celsius * 9) / 5 + 32;
  
  console.log(`Equivalente en grados Kelvin es: ${kelvin.toFixed(2)} K`);
  console.log(
    `Equivalente en grados Fahrenheit es: ${fahrenheit.toFixed(2)} °F`
  );

  rl.close();
});
