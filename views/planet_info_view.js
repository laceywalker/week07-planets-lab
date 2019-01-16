const PubSub = require('../src/helpers/pub_sub.js');

const PlanetInfoView = function () {

};

PlanetInfoView.prototype.bindEvents = function() {
  PubSub.subscribe('SolarSystem:result-calculated', (event) => {
    const returnedPlanet = event.detail;
    console.log('payload received in PlanetInfoView:', returnedPlanet);
    this.displayResult(returnedPlanet);
  })
};

PlanetInfoView.prototype.displayResult = function (result) { // NEW
  const resultElement = document.querySelector('.planet-details');
  resultElement.textContent = `You selected ${result.name}.
   Orbit: ${result.orbit},
   Day: ${result.day},
   Moons: ${result.moons},
   Gravity:  ${result.gravity},
   Surface Area ${result.surfaceArea},
   Volume: ${result.volume},`;
};

module.exports = PlanetInfoView;
