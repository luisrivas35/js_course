export class Propietary {
  #name;
  #address;
  #phone;

  constructor(name, address, phone) {
    this.#name = name;
    this.#address = address;
    this.#phone = phone;
  }

  get name() {
    return this.#name;
  }
  get address() {
    return this.#address;
  }
  get phone() {
    return this.#phone;
  }

  set name(value) {
    this.#name = value; 
  }

  set address(value) {
    this.#address = value; 
  }

  set phone(value) {
    this.#phone = value;
  }

  propietaryData() {
    return this.#name, this.#address, this.#phone;
    
  }
}
