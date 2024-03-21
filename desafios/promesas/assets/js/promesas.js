const results = document.querySelector("#results");
const url = "https://jsonplaceholder.typicode.com/photos";

const message = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      getPhotos();
      resolve("Información Enviada");
    }, 3000);
  });
};

const messageDelayed = async () => {
  try {
    console.log("Obteniendo información desde la API...");
    const messageText = await message();
    console.log(messageText);
  } catch (error) {
    console.log(error);
  }
};

const getPhotos = async () => {
  try {
    const response = await fetch(url);
    const photos = await response.json();

    const arrayPhotos = photos.slice(0, 20);

    console.log(arrayPhotos);

    results.innerHTML = "";

    arrayPhotos.forEach((item) => {
      results.innerHTML += `<li>ID: ${item.id}, Title: ${item.title}</li>`;
    });
  } catch (error) {
    console.log(error);
  }
};

messageDelayed();
