// const posts = [
//   {
//     id: 1,
//     userId: 1,
//     title:
//       "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//   },
//   {
//     id: 2,
//     userId: 1,
//     title: "qui est esse",
//     body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
//   },
//   {
//     id: 3,
//     userId: 1,
//     title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//     body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
//   },
// ];

// callback: función que se pasa a otra función como argumento/parámetro

// promesa

// const findPosts = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         ok: true,
//         json() {
//           return new Promise((resolve) => {
//             resolve(posts);
//           });
//         },
//       });
//     }, 5000);
//   });
// };

// const results = document.querySelector("#results");
// const loading = document.querySelector("#loading");

// // consumir la promesa
// findPosts()
//   .then((response) => response.json())
//   .then((posts) => {
//     posts.forEach((item) => {
//       results.innerHTML += `<li>${item.title}</li>`;
//     });
//   })
//   .catch((err) => console.log(err))
//   .finally(() => {
//     // loading.innerHTML = ""
//     loading.style.display = "none";
//   });

// console.log("resto del código");


// const findPostById = (id) => {
//   return new Promise((resolve, reject) => {
//     const post = posts.find((item) => item.id === id)
//     if (post) {
//       resolve(post)
//     } else {
//       reject("No se encontro el post con el Id: "+ id)
//     }  
//   });
// };

// // const main = async () =>{
// //   const response = await findPostById(5)
// //   console.log(response)
// // }
// const main = async () => {
//   try {
//     const response = await findPostById(5);
//     console.log(response);
//   } catch (error) {
//     console.log(error);
    
//   }
// };

// main()


const results = document.querySelector("#results");

const getPosts = async () => {
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    console.log(posts);

    posts.forEach((item) => {
      results.innerHTML += `<li>ID: ${item.id}, Title: ${item.title}</li>`;
    });

  }catch (error) {
    console.log(error)

  }
};

getPosts()