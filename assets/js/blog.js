function changeBackground() {
  const body = document.body;

  // Check the current background color and toggle it
  if (
    body.style.backgroundColor === "white" ||
    body.style.backgroundColor === ""
  ) {
    body.style.backgroundColor = "grey";
  } else {
    body.style.backgroundColor = "white ";
  }
}

const postsContainer = document.getElementById("posts");

// retrieve data from ls

// loop over it anddisplay it on page
const posts = JSON.parse(localStorage.getItem("posts")) || [];
// console.log(posts);

for (let index = 0; index < posts.length; index++) {
  const postDiv = document.createElement("div");
  postDiv.classList.add("post");
  const titleDiv = document.createElement("div");
  titleDiv.innerText = posts[index].title;
  titleDiv.classList.add("title");
  postDiv.appendChild(titleDiv);

  const contentDiv = document.createElement("div");
  contentDiv.innerText = posts[index].content;
  postDiv.appendChild(contentDiv);

  const usernameDiv = document.createElement("div");
  usernameDiv.innerText = `Created By ${posts[index].username}`;
  postDiv.appendChild(usernameDiv);
  postsContainer.appendChild(postDiv);
}
