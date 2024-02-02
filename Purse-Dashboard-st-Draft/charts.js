// Load the Google Charts package
google.charts.load('current', { 'packages': ['corechart', 'gauge'] });

// Set a callback function to run when the Google Charts package is loaded
google.charts.setOnLoadCallback(drawCharts);

// Callback function to draw the charts
function drawCharts() {
  var data1 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['CSAT', 80],
    ['CES', 55],
    ['NPS', 68]
  ]);

  var options1 = {
    redFrom: 90,
    redTo: 100,
    yellowFrom: 75,
    yellowTo: 90,
    minorTicks: 5,
    greenColor: '#00FF00', // Green
    yellowColor: '#FFFF00', // Yellow
    redColor: '#FF0000', // Red
    greenFrom: 0, // Green pointer color
    greenTo: 75,
    yellowFrom: 76, // Yellow pointer color
    yellowTo: 90,
    redFrom: 91, // Red pointer color
    redTo: 100,
    title: 'CSAT - CES - NPS'
  };
  

  var chart1 = new google.visualization.Gauge(document.getElementById('chart1'));
  chart1.draw(data1, options1);
  // Chart 2: Line Chart
  var data2 = google.visualization.arrayToDataTable([
    ['Year', 'Qeuries logged', 'Call traffic Volume'],
    ['2018', 1000, 400],
    ['2019', 1170, 460],
    ['2020', 660, 1120],
    ['2021', 1030, 540]
  ]);
  var options2 = {
      title: 'Queries and Calls',
      curveType: 'function',
      legend: { position: 'bottom' },
      colors: ['#8c00ff', '#000000', '#7b3f00', '#30d5c8', '#8c92ac', '#a7c2cc'], // Purple, Black, Chocolate Brown, Turquoise, Cool Gray, Ash Blue
      vAxis: { title: 'Amount' },
      hAxis: { title: 'Year' },
      animation: { duration: 500, easing: 'out' },
 };


  var chart2 = new google.visualization.LineChart(document.getElementById('chart2'));
  chart2.draw(data2, options2);

  // Chart 3: Pie Chart
  var data3 = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work', 8],
    ['Sleep', 8],
    ['Eat', 2],
    ['Exercise', 2]

  ]);
  var options3 = {
      title: 'Customer XP',
      pieHole: 0.4,
      colors: ['#800080', '#000000', '#30d5c8', '#8c92ac', '#a7c2cc'], // This line sets the color of each slice to purple
  };

  var chart3 = new google.visualization.PieChart(document.getElementById('chart3'));
  chart3.draw(data3, options3);

  // Chart 4: Bar Chart
  var data4 = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2016', 1000, 400],
    ['2017', 1170, 460],
    ['2018', 660, 1120],
    ['2019', 1030, 540]
  ]);

  var options4 = {
      title: 'Company Performance',
      chartArea: { width: '50%' },
      hAxis: { title: 'Year', minValue: 0 },
      vAxis: { title: 'Amount', minValue: 0 },
      legend: { position: 'top' },
      colors: ['#8c00ff', '#000000', '#7b3f00', '#30d5c8', '#8c92ac', '#a7c2cc'] // Purple, Black, Chocolate Brown, Turquoise, Cool Gray, Ash Blue
  };

  var chart4 = new google.visualization.BarChart(document.getElementById('chart4'));
  chart4.draw(data4, options4);

  // Chart 5: Area Chart
  var data5 = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2016', 1000, 400],
    ['2017', 1170, 460],
    ['2018', 660, 1120],
    ['2019', 1030, 540]
  ]);

  var options5 = {
      title: 'Company Performance',
      hAxis: { title: 'Year', minValue: 0 },
      vAxis: { title: 'Amount', minValue: 0 },
      chartArea: { width: '70%', height: '70%' },
      colors: ['#800080', '#000000', '#7b3f00', '#30d5c8', '#8c92ac', '#a7c2cc'] // Purple, Black, Chocolate Brown, Turquoise, Cool Gray, Ash Blue
  };

  var chart5 = new google.visualization.AreaChart(document.getElementById('chart5'));
  chart5.draw(data5, options5);

  // Chart 6: Column Chart
  var data6 = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2016', 1000, 400],
    ['2017', 1170, 460],
    ['2018', 660, 1120],
    ['2019', 1030, 540]
  ]);

  var options6 = {
      title: 'Company Performance',
      hAxis: { title: 'Year' },
      vAxis: { title: 'Amount' },
      colors: ['#800080', '#FFD700', '#C0C0C0', '#000000', '#7b3f00', '#30d5c8', '#8c92ac', '#a7c2cc'] // Purple, Gold, Silver, Black, Chocolate Brown, Turquoise, Cool Gray, Ash Blue
  };

  var chart6 = new google.visualization.ColumnChart(document.getElementById('chart6'));
  chart6.draw(data6, options6);
  
 // Chart 7: Donut Chart
var data7 = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Work', 8],
  ['Sleep', 8],
  ['Eat', 2],
  ['Exercise', 2]
]);

var options7 = {
  title: 'Daily Activities',
  pieHole: 0.4,
  colors: ['#800080', '#000000', '#30d5c8', '#8c92ac', '#a7c2cc']
};

var chart7 = new google.visualization.PieChart(document.getElementById('chart7'));
chart7.draw(data7, options7); 

  // Chart 8: Scatter Chart
  var data8 = google.visualization.arrayToDataTable([
    ['Age', 'Weight'],
    [8, 12],
    [4, 5.5],
    [11, 14],
    [4, 5],
    [3, 3.5],
    [6.5, 7]
  ]);

  var options8 = {
      title: 'Age vs. Weight comparison',
      hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
      vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
      legend: 'none',
      colors: ['#800080', '#FFD700', '#C0C0C0', '#000000', '#7b3f00', '#30d5c8', '#8c92ac', '#a7c2cc'] // Purple, Gold, Silver, Black, Chocolate Brown, Turquoise, Cool Gray, Ash Blue
  };


  var chart8 = new google.visualization.ScatterChart(document.getElementById('chart8'));
  chart8.draw(data8, options8);

  // Chart 9: Combo Chart
  var data9 = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses', 'Profit'],
    ['2016', 1000, 400, 600],
    ['2017', 1170, 460, 710],
    ['2018', 660, 1120, 460],
    ['2019', 1030, 540, 490]
  ]);

  var options9 = {
    title: 'Company Performance',
    vAxis: { title: 'Amount' },
    hAxis: { title: 'Year' },
    seriesType: 'bars',
    series: { 2: { type: 'line', } },
    colors: ['#800080', '#000000', '#30d5c8', '#8c92ac', '#a7c2cc'], 

  };

  var chart9 = new google.visualization.ComboChart(document.getElementById('chart9'));
  chart9.draw(data9, options9);
}

// Chart 10: Histogram
var data10 = google.visualization.arrayToDataTable([
  ['Data', 'Count'],
  ['A', 10],
  ['B', 23],
  ['C', 17],
  ['D', 5],
  ['E', 12]
]);

var options10 = {
  title: 'Data Distribution',
  legend: 'none',
  hAxis: { title: 'Data' },
  vAxis: { title: 'Count' }
};

var chart10 = new google.visualization.Histogram(document.getElementById('chart10'));
chart10.draw(data10, options10);