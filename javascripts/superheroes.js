// console.log("superheroes");

const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML = domString;
};

const buildDomString = (array) => {
  let domString = "";
  array.forEach((card)=>{
    domString += `<div class="card">`;
    domString +=    `<h2>${card.name}</h2>`;
    domString += `<div class="card">`;
  })
 printToDom(domString, "card-holder");
console.log(domString);
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
  myRequest.open("GET","../db/superheroes.json");
  myRequest.send();
};

startApplication ();