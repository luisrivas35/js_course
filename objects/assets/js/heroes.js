// function Character(nombre,color,velocity) {
//     this._nombre = nombre;
//     this._color = color;
//     this._velocidad = velocity;

// }

// Character.prototype.correr = function(){
//     return `${this._nombre} esta corriendo`
// }
// Character.prototype.saltar = function(){
//     return `${this._nombre} esta saltando`
// }

// propiedades privadas con #
class Heroe {
  #nombre;
  #fuerza;
  #inteligencia;
  #peso;

  constructor(nombre, fuerza, inteligencia, peso) {
    this.#nombre = nombre;
    this.#fuerza = fuerza;
    this.#inteligencia = inteligencia;
    this.#peso = peso;
  }

  get nombre() {
    return this.#nombre;
  }
  get fuerza() {
    return this.#fuerza;
  }
  get inteligencia() {
    return this.#inteligencia;
  }
  get peso() {
    return this.#peso;
  }

  set nombre(value) {
    this.#nombre = value;
  }
  set fuerza(value) {
    this.#fuerza = value;
  }
  set inteligencia(value) {
    this.#inteligencia = value;
  }
  set peso(value) {
    this.#peso = value;
  }

  volar() {
    return `${this.#nombre} esta volando`;
  }
}



const heroe1 = new Heroe()


console.log(heroe1);


