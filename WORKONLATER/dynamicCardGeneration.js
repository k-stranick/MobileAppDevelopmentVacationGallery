// Function to generate card HTML
function generateCardHTML(card) {
    return `
        <div class="col-md-3">
            <div class="card" data-bs-toggle="modal" data-bs-target="#pictureModal" data-title="${card.title}" data-img="${card.img}" data-desc="${card.desc}">
                <img src="${card.img}" class="card-img-top fade-in" alt="${card.title}">
                <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                    <a href="${card.link}" class="btn btn-primary">View Gallery</a>
                </div>
            </div>
        </div>
    `;
}

// Get the container element where cards will be inserted
const cardContainer = document.getElementById('cardContainer');

// Fetch the JSON data and generate the cards
fetch('photoCardInformation.json')
    .then(response => response.json())
    .then(cardData => {
        cardData.forEach(card => {
            cardContainer.innerHTML += generateCardHTML(card);
        });
    })
    .catch(error => console.error('Error fetching card data:', error));


    /*<div class="row mt-5" id="cardContainer">
            <h1>Utah</h1>
            <!-- Cards will be inserted here dynamically -->
        </div>*/

        /*
        https://www.w3schools.com/js/js_json_parse.asp
        https://www.geeksforgeeks.org/read-json-file-using-javascript/
        */