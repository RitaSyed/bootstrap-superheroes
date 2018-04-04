let selectedHero = "";

const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML = domString;
};

const buildDomString = (array) => {
  let domString = "";
  array.forEach((heroes)=>{
     domString += `<li>`;
     domString +=    `<a class="hero-name" data-hero-id="${heroes.id}"><a href="#">${heroes.name}</a>`;
     domString += `</li>`;
  })
 printToDom(domString, "dropdown");
};

const selectHero = (e) => {
  // console.log(e.target.dataset.heroId);
  console.log("clicked");
  selectedHero = e.target.dataset.heroId;
  document.getElementById("button").classList.add("hide");
  genericHeroRequest(loadFileforSingleHero);
}

const addheroSelectionEventListeners = () => {
  let heroNames = document.getElementsByClassName("hero-name");
  for(let i=0; i<heroNames.length; i++){
    heroNames[i].addEventListener("click", selectHero);
  }
};

const displaySuperhero = heroes => {
  let domString = "";
  heroes.forEach(hero => {
    if (hero.id === selectedHero) {
      domString += `<div class="row">`;
      domString += `<div class="col-sm-4">`;
      if (hero.gender === "Male") {
        domString += `<img class="charImage male" src="${
          hero.image
        }">`;
      } else {
        domString += `<img class="charImage female" src="${
          hero.image
        }">`;
      }
      domString += `</div>`;
      domString += `<div class="col-sm-6">`;
      domString += `<h2>Selected Hero: ${hero.name}</h2>`;
      domString +=     `<p class='charDescription'>${hero.description}</p>`;
      domString += `</div>`;
    }
  });
  printToDom(domString, "selected-hero");
};


// const displaySuperhero = (heroes) => {
//   let domString = "";
//   heroes.forEach((hero) => {
//     if (hero.id === selectedHero){
//       domString += `<h2>Selected Hero: ${hero.name}</h2>`;
//     }
//   });
//   printToDom(domString, "selected-hero");
// };

function loadFileforSingleHero () {
  const data = JSON.parse(this.responseText);
  displaySuperhero(data.superheroes);
}

function executeThisCodeIfXHRFails () {
  console.log("SOMETHING BROKE");
}

function executeThisCodeAfterFileLoaded () {
  const data = JSON.parse(this.responseText);
  buildDomString(data.superheroes);
  addheroSelectionEventListeners();

}

const genericHeroRequest = (successFunction) => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", successFunction);
  myRequest.addEventListener("error", executeThisCodeIfXHRFails);
  myRequest.open("GET", "../db/superheroes.json");
  myRequest.send();
};

const startApplication = () => {
 genericHeroRequest(executeThisCodeAfterFileLoaded);
};

startApplication ();