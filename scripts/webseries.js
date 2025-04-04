// Web Series data array
const webSeries = [
    { title:"Stranger Things",imgSrc: "https://i.ibb.co/zhCqprbj/check.png", link: "Pages/webseries.html"},
    { title:"Stranger Things",imgSrc: "https://i.ibb.co/zhCqprbj/check.png", link: "Pages/webseries.html"},
    { title:"Stranger Things",imgSrc: "https://i.ibb.co/zhCqprbj/check.png", link: "Pages/webseries.html"},
    { title:"Stranger Things",imgSrc: "https://i.ibb.co/zhCqprbj/check.png", link: "Pages/webseries.html"}
];

// Function to render web series
function renderWebSeries() {
    const webSeriesList = document.getElementById('webseries');

    // Loop through the web series array and generate HTML for each series
    webSeries.forEach(series => {
        const seriesDiv = document.createElement('div');
        seriesDiv.classList.add('movie');
        
        const seriesLink = document.createElement('a');
        seriesLink.href = series.link;

        const seriesImg = document.createElement('img');
        seriesImg.src = series.imgSrc;
        seriesImg.alt = series.title;

        const seriesTitle = document.createElement('h2');
        seriesTitle.textContent = series.title;
        seriesTitle.classList.add('moviename');

        // Append the image and title inside the anchor tag
        seriesLink.appendChild(seriesImg);
        seriesLink.appendChild(seriesTitle);

        // Append the anchor tag to the series div
        seriesDiv.appendChild(seriesLink);

        // Append the series div to the web series list container
        webSeriesList.appendChild(seriesDiv);
    });
}

// Call the renderWebSeries function to populate the page with the web series list
renderWebSeries();
