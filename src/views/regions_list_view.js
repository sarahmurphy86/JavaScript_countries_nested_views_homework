const PubSub = require('../helpers/pub_sub.js');
const RegionView = require('./region_view.js')

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

// RegionsListView.prototype.render = function () {
//   this.regions.forEach((region) => {
//      const countryName = region.name
//      const htmlElementforCountryName = document.createElement('h3')
//      htmlElementforCountryName.textContent = countryName
//      // console.log(countryName);
//      this.container.appendChild(htmlElementforCountryName);
//
//      const unorderedListToCreateBulletPoints = document.createElement('ul')
//      this.container.appendChild(unorderedListToCreateBulletPoints)
//
//      const countryCapital = region.capital
//      const htmlElementForCapitalCity = document.createElement('li')
//      htmlElementForCapitalCity.textContent = `Capital: ` + countryCapital
//      // console.log(countryCapital);
//      this.container.appendChild(htmlElementForCapitalCity)
//
//      const countryPopulation = region.population
//      const htmlElementForPopulation = document.createElement('li')
//      htmlElementForPopulation.textContent = `Population: ` + countryPopulation
//      this.container.appendChild(htmlElementForPopulation)
//   });
// };

RegionsListView.prototype.render = function () {
  this.regions.forEach((region) => {
    const regionView = new RegionView(region);
    const regionElement = regionView.render();
    this.container.appendChild(regionElement);
  });
};


module.exports = RegionsListView;
