document.cookie = "promo_shown=1; Max-Age=2600000; Secure";
("promo_shown=1; SameSite=None; Max-Age=2600000; Secure");

// let API_KEY = "kvP4uYKeUdF3ISCK7y3pd3HVzPbwo3GhplRRfnvc";

const API_LAUNCHUPCOMMING_URL =
  "https://api.spacexdata.com/v4/launches/upcoming";
const API_LAUNCHPAST_URL = "https://api.spacexdata.com/v4/launches/past";

// https://api.spacexdata.com/v4/launches/upcoming

const launchPast = document.querySelector(".launch-container-past");
const launchUpcoming = document.querySelector(".launch-container-upcoming");

async function getUpcoming() {
  //upcoming
  //  LaunchDates.innerHTML = '';
  const resUpcoming = await fetch(API_LAUNCHUPCOMMING_URL);
  const resultsUpcoming = await resUpcoming.json();
  console.log(resultsUpcoming);

  displayUpcoming(resultsUpcoming);

  // console.log(results);
}

async function getPast() {
  //past
  //  LaunchDates.innerHTML = '';
  const resPast = await fetch(API_LAUNCHPAST_URL);
  const resultsPast = await resPast.json();
  //  console.log(resultsPast);

  displayPast(resultsPast);

  // console.log(results);
}



getUpcoming();
getPast();

function displayPast(past) {
  //past
  for (let n = 0; n < past.length; n++) {
    launchPast.innerHTML += `
  <div class="card past">
    <iframe src="https://www.youtube.com/embed/${past[n].links.youtube_id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="container">
      <h4 class="flightName"><b>Flight name: ${past[n].name}</b></h4>
      <div class="flightNumber">Flight number: ${past[n].flight_number}</div>
      <div class="flightDetails">Flight details: <br> ${past[n].details}</div>
      <div>Launch date: </div><div class="flightFailures">${past[n].static_fire_date_utc}</div>
      <a class="flightLink" href="${past[n].links.article}" target="_blank"><img class="emblem" src="${past[n].links.patch.small}" alt="emblem of ${past[n].links.name}"></a>
      <br>
      <a href="${past[n].links.wikipedia}">Link to <span>${past[n].name} </span>info</a>
    </div>
  </div>
  `;
  }
}

function displayUpcoming(upcoming) {
  //upcoming
  for (let i = 0; i < upcoming.length; i++) {
    launchUpcoming.innerHTML += `
  <div class="card upcoming">
    <iframe src="https://www.youtube.com/embed/${upcoming[i].links.youtube_id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="container">
      <h4 class="flightName"><b>Flight name: ${upcoming[i].name}</b></h4>
      <div class="flightNumber">Flight number: ${upcoming[i].flight_number}</div>
      <div class="flightDetails">Flight details: <br> ${upcoming[i].details}</div>
      <div>Launch date: </div><div class="flightFailures">${upcoming[i].static_fire_date_utc}</div>
      <a class="flightLink" href="${upcoming[i].links.article}" target="_blank"><img class="emblem" src="${upcoming[i].links.patch.small}" alt="emblem of ${upcoming[i].name}"></a>
      <br>
      <a href="${upcoming[i].links.wikipedia}">Link to <span>${upcoming[i].name} </span>info</a>
    </div>
  </div>
  `;
  }
}


// function utcTolocal(){
//   var utc = document.querySelector(".flightFailures");
//   var local = utc.toLocalString();
//   document.querySelector(".flightFailures").innerHTML = local;
// }





// function nullFlightDetails(){
//   var emblem = document.querySelector(".emblem").src;
//
//   if (emblem  != null) {
//     document.querySelector(".emblem").src = "${upcoming[i].links.patch.small}";
//   } else {
//     document.querySelector(".emblem").src = "https://via.placeholder.com/150";
//   }
// }
//
// nullFlightDetails();








var noneUpcoming = document.querySelector(".launch-container-upcoming");
var nonePast = document.querySelector(".launch-container-past");

function switchLaunch() {
  if (noneUpcoming.style.display === "none") {
    noneUpcoming.style.display = "flex";
    document.querySelector(".upcoming-content").style.display = "flex";
    document.querySelector(".upcoming-content-p").style.display = "flex";
    document.querySelector("main").style.background = "#2196F3";
  } else {
    noneUpcoming.style.display = "none";
    document.querySelector(".upcoming-content").style.display = "none";
    document.querySelector(".upcoming-content-p").style.display = "none";
    document.querySelector("main").style.background = "#F28157";
  }
  if (nonePast.style.display === "flex") {
    nonePast.style.display = "none";
    document.querySelector(".past-content").style.display = "none";
    document.querySelector(".past-content-p").style.display = " none";
    document.querySelector("main").style.background = "#F28157";
  } else {
    nonePast.style.display = "flex";
    document.querySelector(".past-content").style.display = "flex";
    document.querySelector(".past-content-p").style.display = "flex";
    document.querySelector("main").style.background = "#2196F3";
  }
}

function switchToggle() {
  if (noneUpcoming.style.display === "none") {
    noneUpcoming.style.display = "flex";
    document.querySelector(".upcoming-content").style.display = "flex";
    document.querySelector(".upcoming-content-p").style.display = "flex";
    document.querySelector("main").style.background = "#2196F3";
  } else {
    noneUpcoming.style.display = "none";
    document.querySelector(".upcoming-content").style.display = "none";
    document.querySelector(".upcoming-content-p").style.display = "none";
    document.querySelector("main").style.background = "#F28157";
  }
  if (nonePast.style.display === "flex") {
    nonePast.style.display = "none";
    document.querySelector(".past-content").style.display = "none";
    document.querySelector(".past-content-p").style.display = " none";
    document.querySelector("main").style.background = "#F28157";
  } else {
    nonePast.style.display = "flex";
    document.querySelector(".past-content").style.display = "flex";
    document.querySelector(".past-content-p").style.display = "flex";
    document.querySelector("main").style.background = "#2196F3";
  }
}
