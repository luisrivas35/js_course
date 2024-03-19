// IIFE
const pokeDOM = (() => {
  const pokeAtributo = (elemento, atributo, valor) => {
    elemento[atributo] = valor;
  };

  return {
    // clausula
    publico(elemento, valor) {
      pokeAtributo(elemento, "src", valor);
    },
  };
})();

const domPikachu = document.querySelector("#domPikachu");
const domQuagsire = document.querySelector("#domQuagsire");
const domDitto = document.querySelector("#domDitto");

class Pokemon {
  #elemento;
  #url;
  constructor(elemento, url) {
    this.#elemento = elemento;
    this.#url = url;
  }
  pintarPokemon() {
    pokeDOM.publico(this.#elemento, this.#url);
  }
}

const pikachu = new Pokemon(
  domPikachu,
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
);
pikachu.pintarPokemon();

const quagsire = new Pokemon(
  domQuagsire,
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png"
);
quagsire.pintarPokemon();

const ditto = new Pokemon(
  domDitto,
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
);
ditto.pintarPokemon();
