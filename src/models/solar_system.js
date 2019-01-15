const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('HyperlinkView:click-submitted', (event) => {
    const inputClick = event.detail;
    console.log('payload received in SolarSystem:', inputClick);
  });
};

// SolarSytem.prototype.getPlanet = function (event) {
//   this.planets.forEach(planet) => {
//     if (event.detail === planet.name) {
//       const planetObject = document.createElement('p');
//       planetObject.textContent = planet;
//       this.element.appendChild(planetObject);
//     }
//   }
// };


module.exports = SolarSystem;


// WordCounter.prototype.bindEvents = function () {
//   PubSub.subscribe('FormView:text-submitted', (event) => {
//     const inputtedText = event.detail;
//     const result = this.countWords(inputtedText);
//     PubSub.publish('WordCounter:result-calculated', result); // MODIFIED
//   });
// };
