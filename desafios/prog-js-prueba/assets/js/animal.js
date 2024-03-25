export class Animal {
  #name;
  #age;
  #img;
  #comments;
  #soundFile;

  constructor(name, age, img, comments, soundFile) {
    this.#name = name;
    this.#age = age;
    this.#img = img;
    this.#comments = comments;
    this.#soundFile = soundFile;
  }

  get name() {
    return this.#name;
  }
  get age() {
    return this.#age;
  }
  get comments() {
    return this.#comments;
  }
  get soundFile() {
    return this.#soundFile;
  }
  get img() {
    return this.#img;
  }
  set comments(comments) {
    this.#comments = comments;
  }

  playAnimalSound() {
    console.log(`Playing ${this.#name}'s sound: ${this.#soundFile}`);
  }
}
