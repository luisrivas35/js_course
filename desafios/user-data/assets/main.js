const main = (() => {
  const resultsElement = document.querySelector("#results");
  async function private() {
    try {
      const response = await fetch("https://randomuser.me/api/?results=10");

      // Tarea utilizar el throw

      const { results } = await response.json();
      results.forEach((user) => {
        resultsElement.innerHTML += `<p>${user.name.first}</p>`;
      });
    } catch (error) {
      console.log(error);
    }
  }
  // función pública
  return {
    getData() {
      private();
    },
  };
})();

document.addEventListener("DOMContentLoaded", () => {
  main.getData();
});
