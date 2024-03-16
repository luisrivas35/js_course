class Persona {
    #nombre
    #rut
    constructor(nombre, rut) {
        this.#nombre = nombre
        this.#rut = rut
    }
    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre
    }
    set rut(nuevoRut) {
        this.#rut = nuevoRut
    }
    get nombre() {
        return this.#nombre
    }
    saludar() {
        console.log('Persona está saludando')
    }
}
class Alumno extends Persona {
    #matriculado
    #notas
    constructor(nombre, rut, matriculado) {
        super(nombre, rut)
        this.#matriculado = matriculado
        this.#notas = []
    }
    set notas(nota) {
        this.#notas.push(nota)
    }
    saludar() {
        console.log(`${this.nombre} está saludando`)
    }
    calcularPromedio() {
        // return promedio de sus notas con dos decimales
        const prom = this.#notas.reduce(
          (acc, curr) => acc + curr, 0);
        const tot = prom / this.#notas.length;
         return tot.toFixed(2);
    
    }
}

class AlumnoTalento extends Alumno {
    #carrera
    constructor(nombre, rut, matriculado, carrera) {
        super(nombre, rut, matriculado)
        this.#carrera = carrera
    }
    emitirDiploma() {
       if (this.calcularPromedio() >= 6) {
         return `Emitir Diploma a: ${this.nombre}`;
       } else {
         return `${this.nombre} no cumple, lo sentimos.`;
       }


    }
}

const francisco = new AlumnoTalento("Francisco", 1, true, "FullStack JS")

francisco.notas = 9
francisco.notas = 10
francisco.notas = 8

// probar francisco.calcularPromedio()

// probar francisco.emitirDiploma()

console.log(francisco)
francisco.saludar()
francisco.emitirDiploma()

console.log(francisco.calcularPromedio())

if (francisco.calcularPromedio() > 5) {
  console.log(francisco.emitirDiploma());
}