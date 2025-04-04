// Movie data array
const movies = [
    { title:"Stranger Things",imgSrc: "https://i.ibb.co/zhCqprbj/check.png", link: "Pages/hdmovies.html" },
    { title:"Stranger Things",imgSrc: "https://i.ibb.co/zhCqprbj/check.png", link: "Pages/hdmovies.html" },
    { title:"Stranger Things",imgSrc: "https://i.ibb.co/zhCqprbj/check.png", link: "Pages/hdmovies.html" },
    { title:"Stranger Things",imgSrc: "https://i.ibb.co/zhCqprbj/check.png", link: "Pages/hdmovies.html" }
];

// Function to render movies
function renderMovies() {
    const movieList = document.getElementById('Hdmovies');

    // Loop through the movie array and generate HTML for each movie
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        
        const movieLink = document.createElement('a');
        movieLink.href = movie.link;

        const movieImg = document.createElement('img');
        movieImg.src = movie.imgSrc;
        movieImg.alt = movie.title;

        const movieTitle = document.createElement('h2');
        movieTitle.textContent = movie.title;
        movieTitle.classList.add('moviename');

        // Append the image and title inside the anchor tag
        movieLink.appendChild(movieImg);
        movieLink.appendChild(movieTitle);

        // Append the anchor tag to the movie div
        movieDiv.appendChild(movieLink);

        // Append the movie div to the movie list container
        movieList.appendChild(movieDiv);
    });
}

// Call the renderMovies function to populate the page with the movies list
renderMovies();


