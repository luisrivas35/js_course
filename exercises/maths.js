const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese el primer número: ", (numero1) => {
  
  numero1 = parseFloat(numero1);

  rl.question("Ingrese el segundo número: ", (numero2) => {
    
    numero2 = parseFloat(numero2);

    if (numero1 <= 0 || numero2 <= 0 || numero1 === numero2) {
      console.log("Por favor ingrese dos números válidos y diferentes.");
      rl.close();
    } else {
      
      rl.question(
        "Ingrese (S para suma, R para resta, D para división, M para multiplicación, MO para módulo): ",
        (operacion) => {
         
          operacion = operacion.toUpperCase();

          switch (operacion) {
            case "S":
              console.log("Suma:", numero1 + numero2);
              break;
            case "R":
              console.log("Resta:", numero1 - numero2);
              break;
            case "D":
              console.log("División:", numero1 / numero2);
              break;
            case "M":
              console.log("Multiplicación:", numero1 * numero2);
              break;
            case "MO":
              console.log("Módulo:", numero1 % numero2);
              break;
            default:
              console.log(
                "Operación no válida. Por favor ingrese una operación válida."
              );
              break;
          }
          rl.close();
        }
      );
    }
  });
});
