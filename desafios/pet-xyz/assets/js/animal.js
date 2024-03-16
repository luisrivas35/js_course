export class Animal {
    #tipo;

    constructor(tipo) {
        this.#tipo = tipo;
    }

    get tipo() { return this.#tipo; }

}