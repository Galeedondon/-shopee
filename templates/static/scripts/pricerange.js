let name = document.getElementById("w_search").value;

//價錢
var price_ = document.getElementById("search_price").value;//價錢字串
price_lengthcut = price_.slice(1,price_.length-1);//價錢去掉頭尾 [ ]
price = price_lengthcut.split(",");//價錢轉陣列

//銷量
var sold_ = document.getElementById("search_sold").value;//銷量字串
sold_lengthcut = sold_.slice(1,sold_.length-1);//銷量去掉頭尾 [ ]
sold = sold_lengthcut.split(",");//銷量轉陣列

//賣家
var seller_ = document.getElementById("search_seller").value;//賣家字串
seller_lengthcut = seller_.slice(1,seller_.length-1);//賣家去掉頭尾 [ ]
seller = seller_lengthcut.split(",");//賣家轉陣列

// 價錢分布
let priceChart = document.getElementById('priceChart').getContext('2d');
// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

    let prChart = new Chart(priceChart, {
      type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:price,
        datasets:[{
          label:
              'Population',
          data:sold,
            fill:false,
          backgroundColor:'#004e66',

          barPercentage:0.5,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#F8B064'
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
            right:30,
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


// 價錢區間賣家
let sellerChart = document.getElementById('sellerChart').getContext('2d');

function seller_0() {
  var x = document.getElementById("sellerChart");
  var y = document.getElementById("sellerChart_sold");

  x.style.display = "block";
  y.style.display = "none";
  document.getElementById("word_change").innerHTML = "賣家分布";
  }

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';


    let slrChart = new Chart(sellerChart, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:price,
        datasets:[{
          label:
              'Population',
          data:seller,
          backgroundColor:'#004e66',

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
            right:30,
            bottom:20,
            top:20,
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
                position: 'bottom'
              },
              ],
          yAxes: [
              {
                ticks: {
                  stepSize:1
                }

              },
            ]
        }

      }
    });
let sellerChart_sold = document.getElementById('sellerChart_sold').getContext('2d');

function sold_0() {
  var x = document.getElementById('sellerChart_sold');
  var y = document.getElementById('sellerChart');

  x.style.display = "block";
  y.style.display = "none";
  document.getElementById("word_change").innerHTML = "銷量分布";
  }

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';


    let slrChart1 = new Chart(sellerChart_sold, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:price,
        datasets:[{
          label:
              'Population',
          data:sold,
          backgroundColor:'#004e66',

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
            right:30,
            bottom:20,
            top:20,
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
                position: 'bottom'
              },
              ],
          yAxes: [
              {
                ticks: {
                  stepSize:1
                }

              },
            ]
        }

      }
    });
//

