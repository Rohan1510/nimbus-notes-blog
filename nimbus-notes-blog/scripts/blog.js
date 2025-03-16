document.addEventListener("DOMContentLoaded", () => {
    fetch("../data.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const blogContainer = document.getElementById("blog-container");
            blogContainer.innerHTML = "";
            data.forEach(post => {
                let article = document.createElement("article");
                article.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.content.substring(0, 100)}...</p>
                    <a href="#">Read More</a>
                `;
                blogContainer.appendChild(article);
            });
        })
        .catch(error => console.error("Error loading blogs:", error.message));
});
