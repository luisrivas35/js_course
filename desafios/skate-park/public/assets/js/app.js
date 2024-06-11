$(document).ready(() => {
  console.log("app.js connected");

   $("#registryBtn").click(async (e) => {
        e.preventDefault();
     try {
       const response = await axios.get("/registry");
       console.log(response.data);
     } catch (error) {
       console.error("Error in file sports:", error);
     }
   });

   
});
