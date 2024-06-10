const form = document.getElementById("post-form");

(function () {
  const posts = JSON.parse(localStorage.getItem("posts"));

  if (!posts) {
    localStorage.setItem("posts", JSON.stringify([]));
  }
})();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  /** this can be accessed from the window object because the element has an id
   * and when adding id's to elements, the elements are being added to the dom
   * and can be accessed from the window object by id value
   */
  let username = window.username.value;
  let title = window.title.value;
  let content = window.content.value;

  const post = {
    username: username,
    title: title,
    // if key same as value, you only need it once
    content,
  };

  const posts = JSON.parse(localStorage.getItem("posts"));
  posts.push(post);
  localStorage.setItem("posts", JSON.stringify(posts));

  window.location.href = "/blog.html";
});
