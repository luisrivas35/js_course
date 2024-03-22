const pokeList = document.querySelector("#pokeList");
const pokeDetails = document.getElementById("pokeDetails");

const fetchPokemon = async () => {
  const response = await fetch("pokemon.json");
  const data = await response.json();
  renderPokemon(data.results);
};

const fetchPokemonDetails = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();
//   console.log(data);

  renderPokemonDetails(
    data.name,
    data.sprites.front_default,
    data.base_experience
  );
};

const renderPokemonDetails = (name, image, experience) => {
  // tarea pintar la información en #pokeDetails
  console.log(name, image, experience);
  const h2 = document.createElement("h2");
  h2.textContent = name;

  const img = document.createElement("img");
  img.src = image;

  const exp = document.createElement("h3");
  exp.textContent = experience;

  pokeDetails.innerHTML = "";

  pokeDetails.appendChild(h2);
  pokeDetails.appendChild(img);
  pokeDetails.appendChild(exp);

}  

const renderPokemon = (pokemons) => {
  pokemons.forEach((poke) => {
    const li = document.createElement("li");
    li.textContent = poke.name;

    const button = document.createElement("button");
    button.textContent = "details";

    // clausulas
    button.addEventListener("click", () => {
      fetchPokemonDetails(poke.name);
    });

    li.appendChild(button);
    pokeList.appendChild(li);
  });
};

fetchPokemon();

