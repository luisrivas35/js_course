const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", async (e) => {
  e.preventDefault();
  const res = await fetch("http://localhost:3000/eliminar/archivo", {
    method: "delete",
  });
  const data = await res.json();
  console.log(data.mensaje);
});
