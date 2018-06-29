const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Regions = function () {
  this.regions = [];
};

Regions.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://restcountries.eu/rest/v2/all');
  requestHelper.get((data) => {
  PubSub.publish('RegionsData:region-loaded', data);
  // console.log(data);
  });
};


// Regions.prototype.getRegionNames = function (countries) {
//   return countries
//     .map(country => country.region)
//     .filter((region, index, regions) => regions.indexOf(region) === index);
// };

module.exports = Regions;
