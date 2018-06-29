
const RegionView = function (region) {
  this.region = region;
};

RegionView.prototype.render = function () {
  const regionElement = document.createElement('div');
  regionElement.classList.add('region');

 const countryName = this.region.name;
 const htmlElementforCountryName = document.createElement('h3');
 htmlElementforCountryName.textContent = countryName;
 // console.log(countryName);
 regionElement.appendChild(htmlElementforCountryName);

 const unorderedListToCreateBulletPoints = document.createElement('ul');
regionElement.appendChild(unorderedListToCreateBulletPoints);

 const countryCapital = this.region.capital;
 const htmlElementForCapitalCity = document.createElement('li');
 htmlElementForCapitalCity.textContent = `Capital: ` + countryCapital;
 // console.log(countryCapital);
regionElement.appendChild(htmlElementForCapitalCity);

 const countryPopulation = this.region.population;
 const htmlElementForPopulation = document.createElement('li');
 htmlElementForPopulation.textContent = `Population: ` + countryPopulation;
 regionElement.appendChild(htmlElementForPopulation);

 return regionElement;

};


module.exports = RegionView;
