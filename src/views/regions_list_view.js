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

     const unorderedList = document.createElement('ul')
     this.container.appendChild(unorderedList)

     const countryCapital = region.capital
     const htmlElement2 = document.createElement('li')
     htmlElement2.textContent = `Capital: ` + countryCapital
     // console.log(countryCapital);
     this.container.appendChild(htmlElement2)

     const countryPopulation = region.population
     const htmlElement3 = document.createElement('li')
     htmlElement3.textContent = `Population: ` + countryPopulation
     this.container.appendChild(htmlElement3)

  });
};



module.exports = RegionsListView;
