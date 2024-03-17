import { Propietary } from "./propietary.js";
import { Pet } from "./pet.js";


$(function () {
  const owner = $("#propietario");
  const phone = $("#telefono");
  const address = $("#direccion");
  const petName = $("#nombreMascota");
  const petType = $("#tipo");
  const disease = $("#enfermedad");
  const showResults = $("#resultado");
  const message = $("#message");
  const regex = /^[a-zA-Z]+$/;
  const phoneRegex = /^\d+$/;
  const appointment = [];

  $("#addBtn").on("click", function (e) {
    e.preventDefault();

    if (!validate(owner, "Propietario")) {
      return;
    }

    if (!validatePhone(phone)) {
      return;
    }

    if (!validateNotEmpty(address, "Residencia")) {
      return;
    }

    if (!validateNotEmpty(petName, "Nombre de la Mascota")) {
      return;
    }

    if (!validateNotEmpty(disease, "Motivo de la Consulta")) {
      return;
    }

    const client = new Propietary(owner.val(), address.val(), phone.val());
    const pet = new Pet(petName.val(), disease.val(), petType.val());

    appointment.push({ client, pet });

    showAppointment();
  });

  function validate(input, fieldName) {
    message.text(" ");
    const value = input.val().trim();
    if (regex.test(value)) {
      return true;
    } else {
      const text = `El campo "${fieldName}" solo acepta letras`;
      message.text(text).css("color", "red");
      return false;
    }
  }

  function validatePhone(phoneNumber) {
    message.text(" ");
    const value = phoneNumber.val().trim();

    if (phoneRegex.test(value)) {
      return true;
    } else {
      const text = "El número de teléfono debe contener solo números";
      message.text(text).css("color", "red");
      return false;
    }
  }

  function validateNotEmpty(input, fieldName) {
    const value = input.val().trim();
    if (value !== "") {
      return true;
    } else {
      const text = `El campo "${fieldName}" no puede estar vacío`;
      message.text(text).css("color", "red");
      return false;
    }
  }

  function showAppointment() {
    showResults.html("");
    appointment.forEach((item) => {
      showResults.append(`
        <tr>
          <td scope="row">${item.client.name}</td>
          <td>${item.client.address}</td>
          <td>${item.client.phone}</td>
          <td>${item.pet.tipo}</td>
          <td>${item.pet.petName}</td>
          <td>${item.pet.disease}</td>
        </tr>
      `);
    });
  }
});
