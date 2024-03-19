const multiMedia = (() => {
  const media = (elemento, atributo, valor) => {
    elemento.setAttribute(atributo, valor);
  };

  return {
    playMedia(elemento, valor) {
      media(elemento, "src", valor);
    },
  };
})();

class Multimedia {
  #url;

  constructor(url) {
    this.#url = url;
  }

  get url() {
    return this.#url;
  }

  setInicio() {
    return "Este método es para realizar un cambio en la URL del video";
  }
}

class Reproductor extends Multimedia {
  #id;

  constructor(id, url) {
    super(url);
    this.#id = id;
  }

  playMultimedia() {
    multiMedia.playMedia(document.querySelector(`#${this.#id}`), this.url);
  }

  setInicio(tiempo) {
    const iframe = document.querySelector(`#${this.#id}`);
    const url = `${this.url}?start=${tiempo}`;
    multiMedia.playMedia(iframe, url);
  }
}


const musicReproductor = new Reproductor(
  "musica",
  "https://www.youtube.com/embed/cxofh8OvOn0"
);
const movieReproductor = new Reproductor(
  "peliculas",
  "https://www.youtube.com/embed/UEJuNHOd8Dw"
);
const seriesReproductor = new Reproductor(
  "series",
  "https://www.youtube.com/embed/D_uFgmH_kfQ"
);

musicReproductor.playMultimedia();
movieReproductor.playMultimedia();
seriesReproductor.playMultimedia();

musicReproductor.setInicio(25);

