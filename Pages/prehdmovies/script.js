// JavaScript
const movieList = document.getElementById("movieList");
const pages = [
    { url: "../hdmovie/01.html", category: "HD Movies" },
    { url: "../webseries/01.html", category: "Web Series" },
    { url: "01.html", category: "Pre HD" }
];

let cachedMovies = {}; // Cache to avoid re-fetching the same pages

function searchMovies(query) {
    movieList.innerHTML = ""; // Clear existing movie list
    movieList.style.display = query ? "flex" : "none"; // Show/hide movie list based on query

    if (!query) return;

    let foundCategory = null;

    const searchPage = (page) => {
        if (cachedMovies[page.url]) {
            return processPageMovies(cachedMovies[page.url], query);
        } else {
            return fetch(page.url)
                .then(response => response.text())
                .then(html => {
                    cachedMovies[page.url] = html;
                    return processPageMovies(html, query);
                })
                .catch(error => {
                    console.error(`Failed to fetch ${page.url}:`, error);
                    return false;
                });
        }
    };

    (async () => {
        for (let page of pages) {
            if (foundCategory) break;

            let found = await searchPage(page);
            if (found) {
                foundCategory = page.category;
            }
        }

        if (!foundCategory) {
            const noResultsMessage = document.createElement("p");
            noResultsMessage.textContent = "No results found.";
            movieList.appendChild(noResultsMessage);
            movieList.style.display = "flex";
        }
    })();
}

function processPageMovies(html, query) {
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    let movies = tempDiv.querySelectorAll(".movie");

    let resultsFound = false;

    movies.forEach(movie => {
        let titleElement = movie.querySelector(".moviename");
        let title = titleElement ? titleElement.textContent.trim().toLowerCase() : "";

        if (title.includes(query.toLowerCase())) {
            resultsFound = true;

            let anchor = movie.querySelector("a");
            let href = anchor ? anchor.getAttribute("href") : "#";

            let img = movie.querySelector("img");
            let imgSrc = img ? img.src : "";
            let resultDiv = document.createElement("div");
            resultDiv.className = "movie";

            resultDiv.innerHTML = `
                <a href="${href}">
                    <img src="${imgSrc}" alt="${title}">
                    <h2 class="moviename">${title}</h2>
                </a>
            `;

            movieList.appendChild(resultDiv);
        }
    });

    return resultsFound;
}

// Event listener for the search input
document.getElementById("search").addEventListener("input", function () {
    searchMovies(this.value.trim());
});
