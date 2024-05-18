const allSongs = document.querySelector("#allSongs");
const formAddSong = document.querySelector("#formAddSong");
const formEditSong = document.querySelector("#formEditSong");
const songModal = document.querySelector("#songModal");
const myModal = new bootstrap.Modal(songModal);
const URL_DOMAIN = "http://localhost:3000";

formAddSong.addEventListener("submit", async (e) => {
  e.preventDefault();
  const titulo = e.target.titulo.value;
  const artista = e.target.artista.value;
  const tono = e.target.tono.value;

  if (!titulo.trim() || !artista.trim() || !tono.trim()) {
    return alert("Campos obligatorios");
  }

  try {
    await axios.post(URL_DOMAIN + "/cancion", { titulo, artista, tono });
    formAddSong.reset();
    getSongs();
  } catch (error) {
    console.log(error);
    alert(error?.response?.data?.msg);
  }
});

const getSongs = async () => {
  try {
    const { data: songs } = await axios.get(URL_DOMAIN + "/cancion");
    allSongs.innerHTML = "";

    const table = document.createElement("table");
    table.classList.add("table", "table-striped");

    const thead = document.createElement("thead");
    thead.classList.add("thead-dark");
    thead.style.color = "white";
    thead.innerHTML = `
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Titulo</th>
        <th scope="col">Artista</th>
        <th scope="col">Tono</th>
        <th scope="col">Acciones</th>
      </tr>
    `;

    const tbody = document.createElement("tbody");
    tbody.style.color = "white";

    songs.forEach((song) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${song.id}</td>
        <td>${song.titulo}</td>
        <td>${song.artista}</td>
        <td>${song.tono}</td>
        <td>
          <button onclick="editSong('${song.id}')" class="btn btn-warning btn-sm">Edit</button>
          <button onclick="deleteSong('${song.id}')" class="btn btn-danger btn-sm">Delete</button>
        </td>
      `;
      tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    allSongs.appendChild(table);
  } catch (error) {
    console.log(error);
    alert(error?.response?.data?.msg);
  }
};

getSongs();

const submitEditSong = async (e) => {
  try {
    e.preventDefault();
    const id = formEditSong.dataset.id;
    await axios.put(URL_DOMAIN + "/cancion/" + id, {
      titulo: e.target.titulo.value,
      artista: e.target.artista.value,
      tono: e.target.tono.value,
    });
    formEditSong.reset();
    getSongs();
    myModal.hide();
  } catch (error) {
    alert(error?.response?.data?.msg);
  }
};

formEditSong.addEventListener("submit", submitEditSong);

const editSong = async (id) => {
  try {
    const { data: song } = await axios.get(URL_DOMAIN + "/cancion/" + id);

    formEditSong.dataset.id = id;
    formEditSong.titulo.value = song.titulo;
    formEditSong.artista.value = song.artista;
    formEditSong.tono.value = song.tono;

    myModal.show();
  } catch (error) {
    alert(error?.response?.data?.msg);
  }
};

const deleteSong = async (id) => {
  try {
    await axios.delete(`${URL_DOMAIN}/cancion/${id}`);
    getSongs();
  } catch (error) {
    console.log(error);
    alert(error?.response?.data?.msg);
  }
};
