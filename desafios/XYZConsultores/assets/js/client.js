import { Tax } from "./tax.js";

export class Client {
  #name;
  #tax;

  constructor(name, tax) {
    this.#name = name;
    this.#tax = tax;
  }

  get clientName() {
    return this.#name;
  }

  set clientName(name) {
    this.#name = name;
  }

  calculateTax() {
    const taxRate = 0.21;
    const taxableAmount =
      this.#tax.taxAnnualGrossAmount - this.#tax.taxDeduction;
    const taxAmount = taxableAmount * taxRate;
    return taxAmount;
  }
}
