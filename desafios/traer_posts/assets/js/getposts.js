document.addEventListener("DOMContentLoaded", function (event) {
  const showData = document.querySelector("#post-data");
  const url = "https://jsonplaceholder.typicode.com/posts";

  const getPosts = async () => {
    try {
      const response = await fetch(url);
      const posts = await response.json();

      showData.innerHTML = "";

      posts.forEach((post) => {
        const boldTitle = `<b>${post.title}</b>`;
        showData.innerHTML += `<ul>
        <li>${boldTitle} - ${post.body}</li>
      </ul>`;
      });
    } catch (error) {
      console.log(error);
    }
  };

  window.getPosts = getPosts;
});
