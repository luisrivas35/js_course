export class Animal{
    #name;
    #age;
    #img;
    #comments;
    #sound;

    constructor(name, age, img, comments, sound) {
        this.#name = name;
        this.#age = age;
        this.#img = img;
        this.#comments = comments;
        this.#sound = sound;
    }

    get name() { return this.#name; }
    get age() { return this.#age; }
    get comments() { return this.#comments;}
    get sound() { return this.#sound;}

    set comments(comments) { this.#comments = comments}

}