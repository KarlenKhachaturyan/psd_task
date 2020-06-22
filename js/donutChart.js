let labels1 = [ 'Sign Ups', 'Total Clicks', 'Total Views'];
let data1 = [65, 22, 200];
let colors1 = [ '#00acac', '#1f7bb6' , '#fbcf71'];

let myChart1 = document.getElementById('donutChart').getContext('2d');

var options = {
  responsive: true,
  segmentShowStroke: false,
  cutoutPercentage: 70,
  elements: {
    arc: {
        borderWidth: 0,
    }
  },
  legend: {
    display: true,
    position: "bottom",
    labels: {
      fontColor: "white",
      fontSize: 14,
      padding: 10,
      boxWidth: 15,
      }
  }
};


let chart = new Chart(myChart1, {
  type: 'doughnut',
  data: {
    labels: labels1,
    datasets: [{
      data: data1,
      backgroundColor : colors1
    }]
  },
  options: options

})