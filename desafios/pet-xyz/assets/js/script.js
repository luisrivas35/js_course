import { Propietary } from "./propietary.js";
import { Pet } from "./pet.js";
import { Animal } from "./animal.js";

$(function () {
  const owner = $("#propietario");
  const phone = $("#telefono");
  const address = $("#direccion");
  const petName = $("#nombreMascota");
  const petType = $("#tipo");
  const disease = $("#enfermedad");
  const showResults = $("#resultado");
  const regex = /^[a-zA-Z]+$/;
  const phoneRegex = /^\d{10}$/;
  const appointment = [];

  $("#addBtn").on("click", function (e) {
    e.preventDefault();
    
    if (!validate(owner, "Propietario")) {
      return; 
    }
    if (!validatePhone(phone, "Telefono")) {
      return;
    }
    if (!validateNotEmpty(address, "Dirección")) {
      return; 
    }
    if (!validateNotEmpty(petName, "Nombre de la Mascota")){
      return;
    } 
    if (!validateNotEmpty(disease, "Motivo de la Consulta")){
      return; 
    }

    createAppointment(owner.val(), phone.val(), address.val(), petName.val(), petType.val(), disease.val());
  });

   function validate(input, fieldName) {
     showResults.text(" ");
     const value = input.val().trim();
     if (regex.test(value)) {
       return true;
     } else {
       const message = `El campo "${fieldName}" solo acepta letras`;
       showResults.text(message).css("color", "red");

       return false;
     }
   }

   function validatePhone(phoneNumber) {
     showResults.text(" ");
     const value = phoneNumber.val().trim();
     if (phoneRegex.test(value)) {
       return true;
     } else {
       const message = "El número de teléfono debe tener solo numeros";
       showResults.text(message).css("color", "red");
       return false;
     }
   }

  function validateNotEmpty(input, fieldName) {
    const value = input.val().trim();
    if (value !== "") {
      return true; // Input is not empty
    } else {
      const message = `El campo "${fieldName}" no puede estar vacío`;
      showResults.text(message).css("color", "red");
      return false; // Input is empty
    }
  }

  function createAppointment(owner, phone, address, petName, petType, disease){
    const client = new Propietary(owner, phone, address)
    const pet = new Pet(petName, disease, petType);
    appointment.push({client, pet});
  }

  console.log(appointment);
});
