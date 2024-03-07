$(function() {
    const noticias = [
  {
    id: 1,
    titulo: "Descubrimiento científico revolucionario",
    descripcion: "Los científicos han encontrado una nueva partícula subatómica...",
    "imagen-url":
      "https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cmFuZG9tfHx8fHx8MTcwOTg0MjE0Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    tags: ["ciencia"],
    categoria: {
      "nombre-categoria": "Ciencia",
    },
  },
  {
    id: 2,
    titulo: "Avances en la lucha contra el cambio climático",
    descripcion:
      "Un nuevo estudio revela medidas efectivas para reducir las emisiones de carbono...",
    "imagen-url":
      "https://images.unsplash.com/photo-1468421870903-4df1664ac249?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cmFuZG9tfHx8fHx8MTcwOTg0MjE1MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    tags: ["medio ambiente"],
    categoria: {
      "nombre-categoria": "Ecología",
    },
  },
  {
    id: 3,
    titulo: "Nuevas tendencias en la moda primavera-verano",
    descripcion:
      "Diseñadores de todo el mundo presentan sus colecciones para la próxima temporada...",
    "imagen-url":
      "https://images.unsplash.com/photo-1624239408355-7b06ee576e95?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cmFuZG9tfHx8fHx8MTcwOTg0MjIxNA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    tags: ["moda", "tendencias", "primavera-verano"],
    categoria: {
      "nombre-categoria": "Estilo",
    },
  },
  {
    id: 4,
    titulo: "Desarrollos tecnológicos en inteligencia artificial",
    descripcion:
      "Empresas líderes anuncian avances significativos en IA aplicada...",
    "imagen-url":
      "https://images.unsplash.com/photo-1606068498020-f2e881dd7197?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cmFuZG9tfHx8fHx8MTcwOTg0MjIxMw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    tags: ["tecnología", "IA"],
    categoria: {
      "nombre-categoria": "Tecnología",
    },
  },
  {
    id: 5,
    titulo: "Descubrimientos arqueológicos en una antigua civilización",
    descripcion:
      "Excavaciones revelan secretos perdidos de una cultura antigua...",
    "imagen-url":
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cmFuZG9tfHx8fHx8MTcwOTg0MjIxMg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    tags: ["arqueología", "historia", "cultura"],
    categoria: {
      "nombre-categoria": "Historia",
    },
  },
  {
    id: 6,
    titulo: "Nuevos tratamientos médicos para enfermedades crónicas",
    descripcion:
      "Investigadores anuncian avances prometedores en el tratamiento de enfermedades...",
    "imagen-url":
      "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cmFuZG9tfHx8fHx8MTcwOTg0MjIxMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    tags: ["salud", "tratamientos"],
    categoria: {
      "nombre-categoria": "Salud",
    },
  },
  {
    id: 7,
    titulo: "Tendencias gastronómicas internacionales",
    descripcion:
      "Chefs de renombre presentan las nuevas tendencias culinarias que están causando sensación...",
    "imagen-url":
      "https://images.unsplash.com/photo-1524391488625-f6921ff34e16?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cmFuZG9tfHx8fHx8MTcwOTg0MjIwOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    tags: ["gastronomía", "restaurantes"],
    categoria: {
      "nombre-categoria": "Gastronomía",
    },
  },
  {
    id: 8,
    titulo: "Innovaciones en el mundo del entretenimiento",
    descripcion:
      "Se anuncian nuevas tecnologías y formatos que revolucionarán la industria del entretenimiento...",
    "imagen-url":
      "https://images.unsplash.com/photo-1618570364947-710d2c120d8c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cmFuZG9tfHx8fHx8MTcwOTg0MjIwNw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    tags: ["entretenimiento", "cine", "música"],
    categoria: {
      "nombre-categoria": "Entretenimiento",
    },
  },
  {
    id: 9,
    titulo: "Avances en la exploración espacial",
    descripcion:
      "Agencias espaciales reportan descubrimientos emocionantes en el espacio profundo...",
    "imagen-url":
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cmFuZG9tfHx8fHx8MTcwOTg0MjIwMg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    tags: ["espacio", "astronomía", "exploración espacial"],
    categoria: {
      "nombre-categoria": "Astronomía",
    },
  },
  {
    id: 10,
    titulo: "Impacto de la pandemia en la economía mundial",
    descripcion:
      "Economistas analizan las repercusiones económicas de la crisis sanitaria global...",
    "imagen-url":
      "https://images.unsplash.com/photo-1538983062322-cdd7fc2208a1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cmFuZG9tfHx8fHx8MTcwOTg0MjI3OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    tags: ["economía", "pandemia", "crisis"],
    categoria: {
      "nombre-categoria": "Economía",
    },
  },
    ];

    const newsResult = $("#noticiasDOM");
      
    noticias.forEach(function (item) {
      let tagsHTML = ""; 

      item.tags.forEach(function (tag, index) {
        tagsHTML += `#${tag}${index !== item.tags.length - 1 ? " " : ""}`; 
      });

      newsResult.append(`
        <article class="col-12 col-md-6 mb-3">
          <div class="card h-100">
            <img src="${item["imagen-url"]}" alt="" class="card-img-top">
            <div class="card-body">
              <h5>${item.titulo}</h5>
              <p class="small">
                <span>Categorias:</span>
                <span class="badge text-bg-primary">${item.categoria["nombre-categoria"]}</span>
              </p>
              <p>${item.descripcion}</p>
              <p>Tags: ${tagsHTML}</p> <!-- Insertar las etiquetas HTML de los tags en una sola línea -->
            </div>
          </div>
        </article>
      `);
    });
});
console.log("Maqueta: https://practica-array-de-objetos-jquery.netlify.app/");




