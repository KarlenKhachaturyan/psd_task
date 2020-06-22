$(function(){

  var ctx = $("#line-chartcanvas");

  var data = {
    labels: ["match1", "match2", "match3", "match4", "match5"],
    datasets: [
      {
        label: "Clicks",
        data: [18, 57, 19, -39, -25, 14, 46],
        backgroundColor: "#fbcf71",
        borderColor: "#fbcf71",
       
        fill: false,
        radius: 5
      },
      {
        label: "Page View",
        data: [-34, 24, 57, 18, -40, -34, 19],
        backgroundColor: "#1f7bb6",
        borderColor: "#1f7bb6",
        
        fill: false,
        radius: 5
      },
      {
        label: "Sign Ups",
        data: [40, 48, 0, -60,-20, 40,  58],
        backgroundColor: "#00acac",
        borderColor: "#00acac",
        fill: false,
        radius: 5
      }
    ]
  };
  
  var options = {
    responsive: true,
    legend: {
      display: true,
      position: "bottom",
      labels: {
        fontColor: "white",
        fontSize: 14,
        padding: 10,
        boxWidth: 15,
      }
    },
    scales: {
      xAxes: [{ticks: {
        fontColor: '#ffffff'
      }}],
      yAxes: [{
        ticks: {fontColor: '#ffffff'},
        gridLines: {drawBorder: false}}],
    }
  };

  var chart = new Chart(ctx, {
    type: "line",
    data: data,
    options: options
  });
});

// var speedCanvas = document.getElementById("speedChart");

// Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = 18;

// var speedData = {
//   labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
//   datasets: [{
//     label: "Car Speed (mph)",
//     data: [0, 59, 75, 20, 20, 55, 40],
//   }]
// };

// var chartOptions = {
//   legend: {
//     display: true,
//     position: 'bottom',
//     labels: {
//       boxWidth: 80,
//       fontColor: 'white'
//     }
//   }
// };

// var lineChart = new Chart(speedCanvas, {
//   type: 'line',
//   data: speedData,
//   options: chartOptions
// });