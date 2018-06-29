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
     const name = region.name
     const htmlElement = document.createElement('h3')
     htmlElement.textContent = name
     this.container.appendChild(htmlElement);
  });
};

module.exports = RegionsListView;
