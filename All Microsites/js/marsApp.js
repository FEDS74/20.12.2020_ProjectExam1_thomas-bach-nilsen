document.cookie = "promo_shown=1; Max-Age=2600000; Secure";
("promo_shown=1; SameSite=none; Max-Age=2600000; Secure");

let API_KEY = "kvP4uYKeUdF3ISCK7y3pd3HVzPbwo3GhplRRfnvc";

let API_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`;

const nasaElement = document.querySelector(".card-container");

async function getRandomNasaImages() {
  nasaElement.innerHTML = "";
  const response = await fetch(API_URL);
  const marsData = await response.json();
  console.log(marsData);

  for (var i = 0; i < 201; i++) {
    console.log(marsData[i]);

    nasaElement.innerHTML += `
      <div class="card">
        <img class="clickable-image" src="${marsData.photos[i].img_src}" alt="${marsData.photos[i].camera.full_name}">
        <div class="container">
          <h4><b>${marsData.photos[i].camera.full_name}</b></h4>
          <h4>Rover Name:<b> ${marsData.photos[i].rover.name}</b></h4>
          <a>Earth Date:</a> <a class="dates">${marsData.photos[i].earth_date}</a><br>
          <a>Launch Date:</a> <a class="dates">${marsData.photos[i].rover.launch_date}</a><br>
          <a>Landing Date:</a> <a class="dates">${marsData.photos[i].rover.landing_date}</a>
        </div>
      </div>
    `;
  }
}
//

getRandomNasaImages();

zoomImage = document.querySelector(".clickable-image");

document.onclick = zoomImage;
function myFunction() {
  document.querySelector(".clickable-image")[0].classList.add("image-open");
}
