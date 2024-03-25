// const getPosts = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts")

//         if (!response.ok) {
//             //throw new Error
//             throw {
//                 error: true,
//                 msg: "Error en peticion",
//                 code: response.status
//             }
//         }

//         const data = await response.json()
//         console.log(data.title)

//     } catch (error) {
//         console.log(error)

//     }
// }

// getPosts()

// ---------------------------------------------------------------------------------------------

const urlApi = "https://pokeapi.co/api/v2/pokemon/";
const yourPokemons = document.getElementById("yourPokemons");
const buttonGetPokemon = document.getElementById("getPokemon");

const getPokemon = async (pokemon) => {
  const pokemonRaw = await fetch(urlApi + pokemon);
  const pokemonData = await pokemonRaw.json();
  console.log(pokemonData);
  return pokemonData;
};

const createPokemonCard = (pokemon) => {
  let abilities = ""; // Add the logic to get the abilities
  abilities = pokemon.abilities
    .map((ability) => ability.ability.name)
    .join(", ");
  
  //  in order, the variables that should come within ${} are:
  // 1 the id of the pokemon
  // 2 the id of the pokemon
  // 3 the name of the first "type" of the pokemon
  // 4 the name of the pokemon
  // 5 the default front image of the pokemon
  // 6 the "abilities" of the pokemon
  // 7 the id of the pokemon
  // 8 the URL of the "latest" "cries" of the pokemon

  return `<div onClick="playSound('${pokemon.id}')" id="cardPokemon${pokemon.id}" class="pokemonCard ${pokemon.forms.name}">
                <p class="pokemon-name">${pokemon.name}</p>
                <img src="${pokemon.sprites.front_default}">
                <div class="card-body">
                    ${abilities}
                </div>
                <audio id="pokemonAudio${pokemon.id}">
                    <source src="${pokemon.cries.latest}" type="audio/mpeg">
                </audio>
            </div>`;
};

const getRandomNumbersArray = () => {
  const numbersArray = [];
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    numbersArray.push(randomNumber);
  }
  return numbersArray;
};

const playSound = (pokemonId) => {
  let audioPokemon = document.getElementById("pokemonAudio" + pokemonId);
  audioPokemon.play();
};

async function main() {
  const randomNumbers = getRandomNumbersArray();
  yourPokemons.innerHTML = ""; 
  for (let i = 0; i < randomNumbers.length; i++) {
    try {
      const pokemonData = await getPokemon(randomNumbers[i]);
      const pokemonCard = createPokemonCard(pokemonData);
      yourPokemons.insertAdjacentHTML("beforeend", pokemonCard);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
}

const inicio = (() => {
  main();
  const interval = setInterval(() => {
    main();
  }, 10000);
  return {
    interval,
  };
})();

buttonGetPokemon.addEventListener("click", () => {
  clearInterval(inicio.interval);
  yourPokemons.classList.remove("greyElements");
  main();
});


