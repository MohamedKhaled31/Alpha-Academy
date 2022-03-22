/*------cricle---------*/
var options = {
  series: [60],
  chart: {
    height: 230,
    type: 'radialBar',
    offsetY: -10
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: '16px',
          color: '#b6b6b6',
          offsetY: 70
        },

        value: {
          offsetY: 30,
          fontSize: '22px',
          color: '#b6b6b6',
          formatter: function(val) {
            return val + "%";
          }

        }

      }

    }

  },

  fill: {

    type: 'gradient',

    gradient: {

      shade: 'dark',

      shadeIntensity: 0.15,

      inverseColors: false,

      opacityFrom: 1,

      opacityTo: 1,

      stops: [0, 50, 65, 91]

    },

  },

  stroke: {

    dashArray: 4

  },

  labels: ['Html'],

};



var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
/*------cricle---------*/
/*------bar---------*/
var options = {
  series: [{
    name: "Html",
    data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48]
  }, {
    name: "Css",
    data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22]
  }, {
    name: "Bootstrap",
    data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18]
  },
  {
    name: "python",
    data: [18, 20, 10, 50, 22, 15, 30, 50,80, 18, 37, 40]
  },{
    name: "Java",
    data: [20, 90, 41, 67, 28, 43, 39, 70, 24, 30, 20, 45]
  },{
    name: "c",
    data: [30, 55, 41, 40, 24, 46, 36, 52, 70, 18, 31, 46]
  }],
  colors: ["#556ee6", "#f1b44c", "#34c38f","#ff0000","#ffe600","#0099ff"],
  chart: {
    type: 'bar',
    height: 400,
    stacked: true,
    toolbar: {
      show: true,
      tools: {
        download: false
      }
    }
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '20%',
      endingShape: "rounded"
    },
  },
  stroke: {
    width: 0,
    colors: ['#fff']
  },
  xaxis: {
    categories: ['Jun', 'Feb', 'Mar', 'April', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    labels: {
      formatter: function(val) {
        return val + " "
      }
    }
  },
  yaxis: {
    title: {
      text: undefined
    },
  },
  tooltip: {
    y: {
      formatter: function(val) {
        return val + "K"
      }
    }
  },
  fill: {
    opacity: 1
  },
  legend: {
    position: 'bottom',
    horizontalAlign: 'left',
    offsetX: 40
  }
};

var bars = new ApexCharts(document.querySelector("#bars"), options);
bars.render();
/*------bar---------*/



/*------loc---------*/

var options = {
  series: [90, 60, 70],
  chart: {
    type: 'polarArea',
  },
  stroke: {
    colors: ['#fff']
  },
  fill: {
    opacity: 0.8
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 150
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

var loac = new ApexCharts(document.querySelector("#loac"), options);
loac.render();



/*------loc---------*/