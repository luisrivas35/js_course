$(document).ready(() => {
  const sportsForm = $("#sportsForm");

  const leerForm = $("#leerForm");
  const eliminarForm = $("#eliminarForm");

  $("#addSportBtn").on("submit", async (evento) => {
    evento.preventDefault();

    const sportName = $("#name").val();
    console.log(archivo);
    const price = $("#price").val();

    try {
      const { data } = await axios.post("/add-sport", {
        sportName: sportName,
        price: price,
      });
      console.log(data);
      
    } catch (error) {
      console.error(error);
      
    }
  });

  renombrarForm.on("submit", async (evento) => {
    evento.preventDefault();

    const nombre = $("#nombre");
    const nuevoNombre = $("#nuevoNombre");

    try {
      const { data } = await axios.put("/renombrar", {
        nombre: nombre.val(),
        nuevoNombre: nuevoNombre.val(),
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  });

  $("#leerForm").on("submit", async (evento) => {
    evento.preventDefault();

    const nombreArchivo = $("#archivo").val();

    try {
      const response = await axios.get(`/leer/${nombreArchivo}`);
      console.log(response.data);
      
    } catch (error) {
      console.error(error);
      alert("Error al leer el archivo");
    }
  });

  eliminarForm.on("submit", async (evento) => {
    evento.preventDefault();

    const archivo = $("#archivo").val();

    try {
      const { data } = await axios.delete("/eliminar", {
        data: { archivo }, // Use data instead of params for DELETE request
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  });
});
