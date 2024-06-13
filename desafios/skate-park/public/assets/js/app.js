$(document).ready(function () {
  $("#deleteBtn").click(function (event) {
    event.preventDefault();

    if (confirm("¿Estás seguro de que quieres eliminar tu cuenta?")) {
      $.ajax({
        url: "/delete-skater",
        method: "DELETE",
        success: function (response) {
          
          if (response.success) {
            alert("Cuenta eliminada correctamente");
            window.location.href = "/"; 
          } else {
            alert("Ha ocurrido un error al intentar eliminar la cuenta");
          }
        },
        error: function (error) {
          console.error("Error deleting account:", error);
          alert("Ha ocurrido un error al intentar eliminar la cuenta");
        },
      });
    }
  });
});
