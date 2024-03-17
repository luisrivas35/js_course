import { Animal } from "./animal.js";

export class Pet extends Animal {
  #petName;
  #disease;

  constructor(petName, disease, tipo) {
    super(tipo); 
    this.#petName = petName;
    this.#disease = disease;
  }

  get petName() { return this.#petName; }
  get disease() { return this.#disease; }

  set petName(petName) { this.petName = petName; }
  set disease(disease) { this.disease = disease;}


}