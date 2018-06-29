const Regions = require('./models/regions.js');
const RegionsListView = require('./views/regions_list_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const placeholderForRegionsListData = document.querySelector('#regions');
  const regionsListView = new RegionsListView(placeholderForRegionsListData);
  regionsListView.getDataFromTheApiToDisplay();


  const regions = new Regions();
  regions.getData();
});
