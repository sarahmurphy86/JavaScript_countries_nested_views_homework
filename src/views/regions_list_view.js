const PubSub = require('../helpers/pub_sub.js');

const RegionsListView = function (container) {
  this.container = container;
}

RegionsListView.prototype.getDataFromTheApiToDisplay = function () {
  PubSub.subscribe('RegionsData:region-loaded', (evt) => {
    this.regions = evt.detail;
    // console.log(this.regions);
    this.render();
  });
};

RegionsListView.prototype.render = function () {
  this.regions.forEach((region) => {
     const countryName = region.name
     const htmlElement = document.createElement('h3')
     htmlElement.textContent = countryName
     // console.log(countryName);
     this.container.appendChild(htmlElement);

     const countryCapital = region.capital
     const htmlElement2 = document.createElement('ul')
     htmlElement2.textContent = countryCapital
     // console.log(countryCapital);
     this.container.appendChild(htmlElement2)

     const countryPopulation = region.population
     const htmlElement3 = document.createElement('ul')
     htmlElement3.textContent = countryPopulation
     this.container.appendChild(htmlElement3)

  });
};



module.exports = RegionsListView;
