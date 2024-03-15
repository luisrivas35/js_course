export class Tax {
  #annualGrossAmount;
  #deduction;

  constructor(annualGross, deduction) {
    this.#annualGrossAmount = annualGross;
    this.#deduction = deduction;
  }

  get taxAnnualGrossAmount() {
    return this.#annualGrossAmount;
  }
  get taxDeduction() {
    return this.#deduction;
  }
}
