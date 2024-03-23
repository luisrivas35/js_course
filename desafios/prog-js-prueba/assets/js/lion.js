import { Animal } from "./animal.js";

export class Lion extends Animal {
  #lionSound = "/assets/sounds/Rugido.mp3";
  #audio;

  constructor(name, age, img, comments) {
    super(name, age, img, comments);
    this.sound = this.#lionSound;
    this.#audio = new Audio(this.#lionSound);
  }

  roar() {
    this.#audio.play();
  }
}
