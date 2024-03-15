import { Tax } from "./tax.js";

export class Client {
  #name;
  #tax;

  constructor(name, tax) {
    this.#name = name;
    this.#tax = tax;
  }

  getName() {
    return this.#name;
  }

  setName(name) {
    this.#name = name;
  }

  calculateTax() {
    const taxRate = 0.21; 
    const taxableAmount =
      this.#tax.getAnnualGrossAmount() - this.#tax.getDeduction();
    const taxAmount = taxableAmount * taxRate;
    return taxAmount;
  }
}
