const posts = [
  {
    id: 1,
    userId: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    id: 2,
    userId: 1,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    id: 3,
    userId: 1,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];

// callback: función que se pasa a otra función como argumento/parámetro

// promesa

const findPostById = () => {
  return new Promise((resolve, reject) => {
    const post = posts[0];

    setTimeout(() => {
      if (false) {
        resolve(post);
      } else {
        reject("no se encontró el libro");
      }
    }, 2000);
  });
};

// consumir la promesa
findPostById()
  .then((post) => console.log(post))
  .catch((err) => console.log(err));
