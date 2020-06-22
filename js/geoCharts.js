google.charts.load('current', {
  'packages':['geochart'],
  'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Popularity'],
    ['United States', 200],
    ['China', 65],
    ['United Kingdom', 22]
  ]);

  var options = {
    colorAxis: {colors: ['#1f7bb6', 'fbcf71']},
    legend: 'none',
    backgroundColor: 'transparent',
  };

  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  chart.draw(data, options);
}