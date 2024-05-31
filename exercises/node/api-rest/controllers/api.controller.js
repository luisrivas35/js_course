import axios from "axios";

const getAllCharacters = async () => {
  let allCharacters = [];
  let nextPage = "https://rickandmortyapi.com/api/character";

  while (nextPage) {
    try {
      const { data } = await axios.get(nextPage);
      allCharacters = allCharacters.concat(data.results);
      nextPage = data.info.next;
    } catch (error) {
      console.error("Error fetching data:", error);
      nextPage = null;
    }
  }

  return allCharacters;
};

export const getAll = async (req, res) => {
  try {
    const allCharacters = await getAllCharacters();
    
    if (allCharacters.length > 0) {
      const characterInfo = allCharacters.map(character => ({
        id: character.id,
        nombre: character.name,
        estado: character.status,
        especie: character.species,
        genero: character.gender,
      }));
      console.log(characterInfo);
      return res.json(characterInfo);
    } else {
      return res.status(404).json({ message: "No characters found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};


export const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    
    let info = {
      id: data.id,
      nombre: data.name,
      estado: data.status,
      especie: data.species,
      genero: data.gender,
    };
    console.log(info);
    return res.json(info);
  } catch (error) {
    console.error(error);
    if (error.response && error.response.status === 404) {
      return res.status(404).json({ message: "Character not found" });
    } else {
      return res.status(500).json({ message: "Server Error" });
    }
  }
};