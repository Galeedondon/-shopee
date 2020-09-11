// 價錢分布
let priceChart = document.getElementById('priceChart').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    let prChart = new Chart(priceChart, {
      type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['200', '220', '230', '235', '240', '260'],
        datasets:[{
          label:
              'Population',
          data:[
            7594,
            61045,
            103060,
            126519,
            5162,
            1072
          ],
            fill:false,
          backgroundColor:'green',

            barPercentage:0.5,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{

        title:{
          display:false,
          text:'綜合類別',
          fontSize:25
        },
        legend:{
          display:false,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:20,
            right:10,
            bottom:20,
            top:20,
          },
            margin:{
              bottom:110,
            },

        },

        tooltips:{
          enabled:true
        }
      }
    });

//
// 價錢區間賣家
let sellerChart = document.getElementById('sellerChart').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    let slrChart = new Chart(sellerChart, {
      type:'horizontalBar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['200', '220', '230', '235', '240', '260','260','260','260','260','260','260','260','260','260'],
        datasets:[{
          label:
              'Population',
          data:[
            5,
            3,
            11,
            7,
            7,
            4,
            7,
            7,
            7
          ],
          backgroundColor:'gray',

            barPercentage:0.5,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:false,
          text:'綜合類別',
          fontSize:25
        },
        legend:{
          display:false,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:30,
            right:20,
            bottom:20,
            top:30,
          },
            margin:{
              bottom:110,
            },

        },

        tooltips:{
          enabled:true
        },
        scales: {

          xAxes: [
              {
                position: 'top'
              },
              ]
        }

      }
    });
//

