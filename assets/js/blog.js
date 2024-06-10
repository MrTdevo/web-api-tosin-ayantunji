const postsContainer = document.getElementById("posts");

// retrieve data from ls
// loop over it anddisplay it on page
const posts = JSON.parse(localStorage.getItem("posts"));
console.log(posts);

for (let index = 0; index < posts.length; index++) {
  const testDiv = document.createElement("div");
  testDiv.innerText = posts[index].username;
  postsContainer.appendChild(testDiv);
}
