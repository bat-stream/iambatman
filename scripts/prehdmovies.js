// Movie data array
const prehdmovies = [
    { title: "Stranger Things", imgSrc: "https://i.ibb.co/zhCqprbj/check.png", link: "Pages/webseries.html" },
    { title: "The Witcher", imgSrc: "https://i.ibb.co/zhCqprbj/check.png", link: "Pages/webseries.html" },
    { title: "The Crown", imgSrc: "https://i.ibb.co/zhCqprbj/check.png", link: "Pages/webseries.html" },
    { title: "Black Mirror", imgSrc: "https://i.ibb.co/zhCqprbj/check.png", link: "Pages/webseries.html" }
];

// Function to render movies
function renderprehdmovies() {
    const prehdmoviesList = document.getElementById('prehdmovies'); // Corrected the reference to 'prehdmovies'

    // Loop through the movie array and generate HTML for each movie
    prehdmovies.forEach(prehd => {
        const prehdDiv = document.createElement('div');
        prehdDiv.classList.add('movie'); // Add class to style each movie

        const prehdLink = document.createElement('a');
        prehdLink.href = prehd.link; // Set the link for each movie

        const prehdImg = document.createElement('img');
        prehdImg.src = prehd.imgSrc; // Set the image for each movie
        prehdImg.alt = prehd.title;

        const prehdTitle = document.createElement('h2');
        prehdTitle.textContent = prehd.title; // Set the movie title
        prehdTitle.classList.add('moviename'); // Add a class for styling the title

        // Append the image and title inside the anchor tag
        prehdLink.appendChild(prehdImg);
        prehdLink.appendChild(prehdTitle);

        // Append the anchor tag to the movie div
        prehdDiv.appendChild(prehdLink);

        // Append the movie div to the container
        prehdmoviesList.appendChild(prehdDiv);
    });
}

// Call the renderprehdmovies function to populate the page with the movie list
renderprehdmovies();
