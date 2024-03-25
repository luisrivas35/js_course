import {Animal} from "./animal.js"
import { Lion } from "./lion.js";
import { Wolf } from "./wolf.js";
import { Bear } from "./bear.js";
import { Snake } from "./snake.js";
import { Eagle } from "./eagle.js";

const animalSelect = document.querySelector("#animal");
const animalAge = document.querySelector("#edad");
const comments = document.querySelector("#comentarios");
const preview = document.querySelector("#preview");
const btnRecord = document.querySelector("#btnRegistrar");
const animalArray =[];
const animalClasses = {
  Lion: Lion,
  Wolf: Wolf,
  Bear: Bear,
  Snake: Snake,
  Eagle: Eagle,
};

let animalData = null;

const fetchAnimalData = async () => {
  try {
    const response = await fetch("animales.json");
    animalData = await response.json();
  } catch (error) {
    console.error("Error fetching animal data:", error);
  }
};

fetchAnimalData();

const getAnimalImage = (animal) => {
  const selectedAnimal = animalData.animales.find(
    (item) => item.name === animal
  );
  return selectedAnimal ? `assets/imgs/${selectedAnimal.imagen}` : "";
};

animalSelect.addEventListener("change", () => {
  const selectedAnimal = animalSelect.value;
  const animalImage = getAnimalImage(selectedAnimal);
  renderAnimalPreview(animalImage);
});

const renderAnimalPreview = (imageUrl) => {
    preview.innerHTML = ""; 

    if (imageUrl) {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Animal Preview";
        
        img.style.maxWidth = "100%";
        img.style.maxHeight = "100%";
        img.style.display = "block"; 
        
        preview.appendChild(img);
    } else {
        preview.textContent = "No image available in file";
    }
};


const validateAnimalForm = () => {
    if (animalSelect.value === "Seleccione un animal" || animalAge.value === "Seleccione un rango de años" || comments.value.trim() === "") {
        alert("Por favor, complete todos los campos del formulario.");
        return false;
    }
    return true;
};

const getAnimalSound = (animal) => {
  const selectedAnimal = animalData.animales.find(
    (item) => item.name === animal
  );
  return selectedAnimal ? `assets/sounds/${selectedAnimal.sonido}` : "";
};

btnRecord.addEventListener("click", async (event) => {
  event.preventDefault();

  if (validateAnimalForm()) {
    const sound = getAnimalSound(animalSelect.value);
    const animalImg = getAnimalImage(animalSelect.value);

    const AnimalClass = animalClasses[animalSelect.value];
    if (AnimalClass) {
      try {
        const newAnimal = new AnimalClass(
          animalSelect.value,
          animalAge.value,
          animalImg,
          comments.value,
          sound
        );

        animalArray.push(newAnimal);
                
      } catch (error) {
        console.error("Error creating animal registry:", error);
        alert("Error creating animal registry. Please try again.");
      }
    } else {
      alert("Invalid animal selection.");
    }
  }
  renderAnimalsInArray();
});

const renderAnimalsInArray = () => {
  const animalesDiv = document.getElementById("Animales");
  animalesDiv.innerHTML = "";

  const availableWidth = animalesDiv.clientWidth;
  const cardWidth = 250; 
  const cardMargin = 10; 

  const maxCardsPerRow = Math.floor(availableWidth / (cardWidth + cardMargin));

  const totalCards = animalArray.length;
  const totalRows = Math.ceil(totalCards / maxCardsPerRow);

  let rowDiv;
  for (let i = 0; i < totalRows; i++) {
    rowDiv = document.createElement("div");
    rowDiv.classList.add("d-flex", "justify-content-between");
    animalesDiv.appendChild(rowDiv);

    const cardsInThisRow = Math.min(
      maxCardsPerRow,
      totalCards - i * maxCardsPerRow
    );
    for (let j = 0; j < cardsInThisRow; j++) {
      const animal = animalArray[i * maxCardsPerRow + j];
      const animalCard = createAnimalCard(animal);
      rowDiv.appendChild(animalCard);
    }
  }

  resetFormFields();
};


const createAnimalCard = (animal) => {
  const animalCard = document.createElement("div");
  animalCard.classList.add("animal-card", "p-3", "bg-light");

  const animalImg = document.createElement("img");
  animalImg.src = animal.img;
  animalImg.alt = `${animal.name} Preview`;
  animalImg.classList.add("animal-image");

  const playSoundIcon = createPlaySoundIcon(animal);

  animalCard.addEventListener("click", () => {
    showModal(animal);
  });

  animalCard.appendChild(animalImg);
  animalCard.appendChild(playSoundIcon);

  return animalCard;
};

const createPlaySoundIcon = (animal) => {
  const playSoundIcon = document.createElement("i");
  playSoundIcon.classList.add("fas", "fa-volume-up", "animal-sound-icon");
  playSoundIcon.addEventListener("click", () => {
    const audioPlayer = document.getElementById("player");
    audioPlayer.src = animal.soundFile;
    audioPlayer.play();
  });
  return playSoundIcon;
};

const resetFormFields = () => {
  animalSelect.value = "Seleccione un animal";
  animalAge.value = "Seleccione un rango de años";
  comments.value = "";
  preview.innerHTML = "";
};


const showModal = (animal) => {
    const modal = document.getElementById("exampleModal");
    const modalBody = modal.querySelector(".modal-body");
    modalBody.innerHTML = ""; 
    
    const infoCard = document.createElement("div");
    infoCard.classList.add("info-card");

    const animalName = document.createElement("h5");
    animalName.textContent = `Nombre: ${animal.name}`;

    const animalImage = document.createElement("img");
    animalImage.src = animal.img;
    animalImage.alt = `${animal.name} Preview`;
    animalImage.classList.add("modal-animal-image");

    const animalAge = document.createElement("p");
    animalAge.textContent = `Edad: ${animal.age}`;

    const animalComments = document.createElement("p");
    animalComments.textContent = `Comentarios: ${animal.comments}`;

    const animalSound = document.createElement("p");
    animalSound.textContent = `Sonido: ${animal.soundFile}`;

    infoCard.appendChild(animalName);
    infoCard.appendChild(animalImage);
    infoCard.appendChild(animalAge);
    infoCard.appendChild(animalComments);
        
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Close";
    closeBtn.classList.add("btn", "btn-secondary");
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        modal.classList.remove("show");
    });

    modalBody.appendChild(infoCard);
    modalBody.appendChild(closeBtn);

    modal.classList.add("show"); 
    modal.style.display = "block"; 
};










