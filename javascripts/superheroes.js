// console.log("superheroes");

const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML = domString;
};

const buildDomString = (array) => {
  let domString = "";
  array.forEach((heroes)=>{
    // domString += `<div class="card">`;
    // domString +=    `<h2>${card.name}</h2>`;
    // domString += `<div class="card">`;
     domString += `<div class="col-sm-3">`;
     domString += `<div class="panel">`;
     domString +=   `<div class="panel-heading">`;
     domString +=      `<h3 class="panel-title">${heroes.name}</h3>`;
     domString +=   `</div>`;
     domString +=    `<div class="panel-body">`;
     domString +=       `<img class="charImage" src="${heroes.image}">`;
     domString +=       `<p class="charDescription">${heroes.description}"<p>`;
     domString +=    `</div>`;
     domString += `</div>`;
     domString += `</div>`;
    // domString += `<div class="card">`;
  })
 printToDom(domString, "card-holder");
// console.log(domString);
};


function executeThisCodeIfXHRFails () {


}

function executeThisCodeAfterFileLoaded () {
  const data = JSON.parse(this.responseText);
  buildDomString(data.superheroes);
  console.log(data.superheroes);
}

const startApplication = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
  myRequest.addEventListener("error", executeThisCodeIfXHRFails);
  myRequest.open("GET", "../db/superheroes.json");
  myRequest.send();
};

startApplication ();