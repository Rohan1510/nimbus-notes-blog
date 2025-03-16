function savePost(title, content) {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push({ title, content });
    localStorage.setItem("posts", JSON.stringify(posts));
}

function loadPosts() {
    return JSON.parse(localStorage.getItem("posts")) || [];
}
