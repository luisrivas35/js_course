
// function factor(num){
//     let resul=1
//     for (i=1; i <= num; i++){

//         resul *= i;

//     }
//     return resul;
// }

// console.log(factor(5));

// const fruts = ["palta", "sandia", "piña", "pera", "platano"]
// const frutlist = document.querySelector("#fruts")

// frutlist.innerHTML = "";
// fruts.forEach((frut) =>{
//     frutlist.innerHTML += `<li>${frut}</li>` 

// })

// const dog = {
//     name: "rex",
//     age: "4",
//     favorites: {
//         food: ["meat", "fish"],
//         toys: ["ball", "shoes"]
//     }
// }

// console.log(dog.favorites.toys[0])
// console.log(dog.favorites.food[1])

// const fruts = [
//   { name: "palta", icon: "🥑", price: 10 },
//   { name: "sandia", icon: "🍉", price: 5 },
//   { name: "piña", icon: "🍍", price: 7 },
// ]

// const forma = document.querySelector("#form");
// const frutlist = document.querySelector("#fruts");

// fruts.forEach((frut) => {
//   frutlist.innerHTML += `<li>${frut.name}, ${frut.icon}, ${frut.price}</li>`;
// });

// forma.reset();

// document.write("<p>Estadisticas centro médico ñuñoa</p>");


const radiologiaArray = [
  {
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];

const traumatologiaArray = [
  {
    hora: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
];

const dentalArray = [
  {
    hora: "8:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
  },
];

const radiologiaHtml = document.getElementById("radiologiaHtml");
const traumaHtml = document.getElementById("traumaHtml");
const dentalHtml = document.getElementById("dentalHtml");
const tableRadiologia = document.getElementById("tableRadiologia");
const tableTrauma = document.getElementById("tableTrauma");
const tableDental = document.getElementById("tableDental");
// const radiologiahtml = document.querySelector("#radiologiahtml") 

radiologiaHtml.textContent = `Primera atención: ${
  radiologiaArray[0].paciente
} - ${radiologiaArray[0]["prevision"]} 
| Última atención: ${radiologiaArray[radiologiaArray.length - 1].paciente} - 
${radiologiaArray[radiologiaArray.length - 1].prevision}`;

traumaHtml.textContent = `Primera atención: ${
  traumatologiaArray[0].paciente
} - ${traumatologiaArray[0]["prevision"]} 
| Última atención: ${traumatologiaArray[traumatologiaArray.length - 1].paciente} - 
${traumatologiaArray[traumatologiaArray.length - 1].prevision}`;

dentalHtml.textContent = `Primera atención: ${
  dentalArray[0].paciente
} - ${dentalArray[0]["prevision"]} 
| Última atención: ${dentalArray[dentalArray.length - 1].paciente} - 
${dentalArray[dentalArray.length - 1].prevision}`;


// tableRadiologia.innerHTML = "";

// radiologiaArray.forEach((item, index, array) => {
//   tableRadiologia.innerHTML += `
//     <tr>
//         <td scope="row">${item.hora}</td>
//         <td>${item.especialista}</td>
//         <td>${item.paciente}</td>
//         <td>${item.rut}</td>
//         <td>${item.prevision}</td>
//     </tr>
//     `;
// });

tableTrauma.innerHTML = "";

traumatologiaArray.forEach((t, index, array) => {
  tableTrauma.innerHTML += `
    <tr>
        <td scope="row">${t.hora}</td>
        <td>${t.especialista}</td>
        <td>${t.paciente}</td>
        <td>${t.rut}</td>
        <td>${t.prevision}</td>
    </tr>
    `;
});

tableDental.innerHTML = "";

dentalArray.forEach((item, index, array) => {
  tableDental.innerHTML += `
    <tr>
        <td scope="row">${item.hora}</td>
        <td>${item.especialista}</td>
        <td>${item.paciente}</td>
        <td>${item.rut}</td>
        <td>${item.prevision}</td>
    </tr>
    `;
});
