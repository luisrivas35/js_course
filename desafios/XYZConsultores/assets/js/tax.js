export class Tax {
  #annualGrossAmount;
  #deduction;

  constructor(annualGross, deduction) {
    this.#annualGrossAmount = annualGross;
    this.#deduction = deduction;
  }

  getAnnualGrossAmount() {
    return this.#annualGrossAmount;
  }
  getDeduction() {
    return this.#deduction;
  }
}
