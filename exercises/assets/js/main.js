// const word = "javascript";
// let resp = prompt("Escriba javascript");

// if (resp.toLowerCase.trim() === word) {
//   console.log("Escribiste bien");
// } else {
//   console.log("Escribiste Mal");
// }

const input = prompt(`Escriba el numero de la opcion: 
1. Manzana 
2. Pera
3. Ciruela

`);

// switch (input) {
//   case "1":
//     console.log("Manzana vale $25");
//     break;
//   case "2":
//     console.log("Pera vale $75");
//     break;
//   case "3":
//     console.log("Ciruela vale $125");
//     break;
//   default:
//     console.log("Operación no válida.");
// }

if (input === "1") {
    console.log("Manzana vale $25");
} else if (input === "2") {
    console.log("Pera vale $75");
} else if (input === "3") {
    console.log("Ciruela vale $125");
}else {
    console.log("Opcion No valida");
}
