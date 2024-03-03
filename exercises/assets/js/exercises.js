
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

const fruts = [
  { name: "palta", icon: "🥑", price: 10 },
  { name: "sandia", icon: "🍉", price: 5 },
  { name: "piña", icon: "🍍", price: 7 },
]

const forma = document.querySelector("#form");
const frutlist = document.querySelector("#fruts");

fruts.forEach((frut) => {
  frutlist.innerHTML += `<li>${frut.name}, ${frut.icon}, ${frut.price}</li>`;
});

forma.reset();