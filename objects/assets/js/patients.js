class Consultory {
  #name;
  #patients = [];

  constructor(name, patients = []) {
    this.#name = name;
    this.#patients = patients;
  }

  getConsultoryName() {
    return this.#name;
  }

  getPatients() {
    return this.#patients;
  }

  setConsultoryName(name) {
    this.#name = name;
  }

  addPatient(patient) {
    this.#patients.push(patient);
  }

  listPatients() {
    console.log(`Consultory: ${this.getConsultoryName()}`);

    this.getPatients().forEach(function (patient) {
      console.log(
        `Id Patient: ${patient.getRut()}, Name: ${patient.getName()}, Age: ${patient.getAge()}, Diagnose: ${patient.getDiagnostic()}`
      );
    });
  }
}

class Patient {
  #name;
  #age;
  #rut;
  #diagnostic;

  constructor(name, age, rut, diagnostic) {
    this.#name = name;
    this.#age = age;
    this.#rut = rut;
    this.#diagnostic = diagnostic;
  }

  getName() {
    return this.#name;
  }
  getAge() {
    return this.#age;
  }
  getRut() {
    return this.#rut;
  }
  getDiagnostic() {
    return this.#diagnostic;
  }

  setName(name) {
    this.#name = name;
  }
  setAge(age) {
    this.#age = age;
  }
  setRut(rut) {
    this.#rut = rut;
  }
  setDiagnostic(diagnostic) {
    this.#diagnostic = diagnostic;
  }
}

const patient1 = new Patient("Peter", 50, 145698239, "hypertense");
const patient2 = new Patient("Mary", 25, 165997214, "covit");
const patient3 = new Patient("Mark", 80, 115790232, "diabetes");
const patient4 = new Patient("Ignacio", 30, 156902312, "flu");

const consultory1 = new Consultory("Have faith and pay your bills");
consultory1.addPatient(patient1);
consultory1.addPatient(patient2);
consultory1.addPatient(patient3);
consultory1.addPatient(patient4);

consultory1.listPatients();
