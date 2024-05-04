$(document).ready(() => {
  console.log("estoy conectado");
  $("#list").on("click", async function (e) {
    e.preventDefault();

    const url = $(this).attr("href"); 

    try {
      const response = await axios.get(url);
    
    } catch (error) {
      
      console.error("Error fetching data:", error);
    }
  });
});


