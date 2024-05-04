$(document).ready(() => {
  console.log("This is OK");

  $("#list").click(async () => {
   try {
      const response = await axios.get("/sports");
      console.log(response.data);
          
    } catch (error) {
      console.error("Error in file sports:", error);
    }
  });

  $("#addSportBtn").click(async () => {
    const name = $("#name").val();
    const price = $("#price").val();

    try {
      const response = await axios.post("/add", { name, price });
      console.log(response.data);
      $("#successMessage").show();
      $("#successMessage").fadeIn(); 
      setTimeout(() => {
        $("#successMessage").fadeOut(); 
        location.reload(); 
      }, 2000);
    } catch (error) {
      console.error("Error adding sport:", error);
    }
  });

  $("#json").click(async () => {
    try {
      const response = await axios.get("/json");
      console.log(response.data);
    } catch (error) {
      console.error("Error in json", error);
    }
  });

  $("#editSportBtn").click(async () => {
    const id = $("#id").val();
    const name = $("#name").val();
    const price = $("#price").val();

    try {
      const response = await axios.put(`/edit/${id}`, { name, price });
      console.log(response.data);
      $("#successMessage").show();
      $("#successMessage").fadeIn();
      setTimeout(() => {
        $("#successMessage").fadeOut();
        location.reload();
      }, 2000);
    } catch (error) {
      console.error("Error in file sports:", error);
      $("#errorMessage").show();
      $("#errorMessage").fadeIn();
      setTimeout(() => {
        $("#errorMessage").fadeOut();
        location.reload();
      }, 2000);
    }
  });

  $("#removeSportBtn").click(async () => {
    const id = $("#id").val();
    try {
      const response = await axios.delete(`/deleteSport/${id}`, {id});
      console.log(response.data);
      $("#successMessage").show();
      $("#successMessage").fadeIn();
      setTimeout(() => {
        $("#successMessage").fadeOut();
        location.reload();
      }, 2000);
    } catch (error) {
      console.error("Error in file sports:", error);
      $("#errorMessage").show(); 
      $("#errorMessage").fadeIn();
      setTimeout(() => {
        $("#errorMessage").fadeOut();
        location.reload();
      }, 2000);
    }
  });



});


