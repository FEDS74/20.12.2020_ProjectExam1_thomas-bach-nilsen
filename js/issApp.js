// Map Code
const issMap = L.map("apiMap").setView([0, 0], 1);
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
issMap.zoomControl.remove();

// Tiles Code
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, {attribution});
tiles.addTo(issMap);

// Marker with ISS Icon
const issIcon = L.icon({
  iconUrl: "./image/ISS.png",
  iconSize: [100, 80],
  iconAnchor: [50, 40]
});

const issMarker = L.marker([0, 0], {icon: issIcon}).addTo(issMap);

// API Fetch Code for ISS whereabouts
const API_URL_ISS = "http://api.open-notify.org/iss-now.json";

let zoomSync = true;

async function getApiISS() {
  const responseISS = await fetch(API_URL_ISS);
  const apiDataISS = await responseISS.json();
  const {
    iss_position: {latitude, longitude}
  } = apiDataISS;

  issMarker.setLatLng([latitude, longitude]);
  if (zoomSync) {
    issMap.setView([latitude, longitude], 3);
    issMap.fitBounds([latitude, longitude]);
    zoomSync = false;
  }
}

getApiISS();

setInterval(getApiISS, 500);

const API_URL_PEOPLE = `http://api.open-notify.org/astros.json`;

const issElements = document.querySelector("#apiPeople");

async function getNumberOfPeople() {
  issElements.innerHTML = "";
  const responsePeople = await fetch(API_URL_PEOPLE);
  const issData = await responsePeople.json();
  //console.log(issData.people);

  for (let i = 0; i < issData.people.length; i++) {
    issElements.innerHTML += `
       <div class="peoplesNames-container">
         <div class="peopleNames"><b>Space craft:</b><br> ${issData.people[i].craft}<br><b>Astronaut:</b><br> ${issData.people[i].name}</div>
       </div>
     `;
  }
}
getNumberOfPeople();

//
//  const queryString = document.location.search;
//  const params = new URLSearchParams(queryString);
//
//
// const wikiUrl = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Sergey Ryzhikov`;
//
// const API_URL_WIKIPEDIA  = `https://cors-anywhere.herokuapp.com/` + wikiUrl;
//
// const wikiElements = document.querySelector('.peopleNames');
//
// async function wikiNameExtraction() {
//   const responseWiki = await fetch(API_URL_WIKIPEDIA);
//   const wikiData = await responseWiki.json();
//
//
//   for(let j=0; j < wikiData.length; j++) {
//   console.log(wikiData.query.pages[j].extract);
//     wikiElements.innerHTML += `
//       <div class="peopleNames"><p>${wikiData.query.pages[j].extract}</p></div>
//     `;
//   };
// }
// wikiNameExtraction();
