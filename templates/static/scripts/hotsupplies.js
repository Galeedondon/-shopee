$(document).ready(function ()
  {
      $("#hotbiglist").select2();
      $("#hotmidlist").select2();
      $("#hotsmllist").select2();
  }
);

//銷量
var sold_ = document.getElementById("search_sold").value;//銷量字串
sold_lengthcut = sold_.slice(1,sold_.length-1);//銷量去掉頭尾 [ ]
sold = sold_lengthcut.split(",");//銷量轉陣列


//商品名稱
var name_ = document.getElementById("search_name").value;//商品名稱字串
name_lengthcut = name_.slice(1,name_.length-1);//商品名稱去掉頭尾 [ ]
name0 = name_lengthcut.split("',");//商品名稱轉陣列

//平均銷量
var avg_sold_ = document.getElementById("search_avg").value;//商品名稱字串
avg_sold_lengthcut = avg_sold_.slice(1,avg_sold_.length-1);//商品名稱去掉頭尾 [ ]
avg_sold = avg_sold_.split(",");//商品名稱轉陣列

//賣家數量
var seller_ = document.getElementById("search_seller").value;//賣家字串
seller_lengthcut = seller_.slice(1,seller_.length-1);//賣家去掉頭尾 [ ]
seller = seller_lengthcut.split(",");//賣家轉陣列


// 商品銷量
let sold_chart = document.getElementById('sold_chart').getContext('2d');

function sold_0() {
  var x = document.getElementById("sold_chart");
  var y = document.getElementById("avg_sold_chart");
  var z = document.getElementById("seller_chart");

  x.style.display = "block";
  y.style.display = "none";
  z.style.display = "none";
  document.getElementById("word_change").innerHTML = "商品銷量";
  }

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 12;
    Chart.defaults.global.defaultFontColor = '#777';

    let massPopChart1 = new Chart(sold_chart, {
      type:'bar',
      data:{
        labels:name0,
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
            left:20,
            right:20,
            bottom:10,
            top:10,
          },
            margin:{
              bottom:110,
            },

        },
          scales: {
          yAxes: [{
            scaleLabel: {

            }
          }],
          xAxes: [
              {
                labelString:'5',
              },
              ]
        },

        tooltips:{
          enabled:true
        }
      }
    });

//
// 平均賣家銷量
let avg_sold_chart = document.getElementById('avg_sold_chart').getContext('2d');

function avg_sold_0() {
  var x = document.getElementById("sold_chart");
  var y = document.getElementById("avg_sold_chart");
  var z = document.getElementById("seller_chart");

  x.style.display = "none";
  y.style.display = "block";
  z.style.display = "none";
  document.getElementById("word_change").innerHTML = "平均賣家銷量";
  }

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 12;
    Chart.defaults.global.defaultFontColor = '#777';

    let massPopChart2 = new Chart(avg_sold_chart, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:name0,
        datasets:[{
          label:
              'Population',
          data:avg_sold,
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
            right:20,
            bottom:30,
            top:0,
          },
            margin:{
              bottom:110,
            },

        },
          scales: {
          yAxes: [{
            scaleLabel: {

            }
          }],
          xAxes: [
              {
                labelString:'5',
              },
              ]
        },

        tooltips:{
          enabled:true
        }
      }
    });

//
// 賣家數量
let seller_chart = document.getElementById('seller_chart').getContext('2d');

function seller_0() {
  var x = document.getElementById("sold_chart");
  var y = document.getElementById("avg_sold_chart");
  var z = document.getElementById("seller_chart");

  x.style.display = "none";
  y.style.display = "none";
  z.style.display = "block";

  document.getElementById("word_change").innerHTML = "賣家數量";
  }

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 12;
    Chart.defaults.global.defaultFontColor = '#777';

    let massPopChart3 = new Chart(seller_chart, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:name0,
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
            right:20,
            bottom:30,
            top:0,
          },
            margin:{
              bottom:110,
            },

        },
          scales: {
          yAxes: [{
            scaleLabel: {

            }
          }],
          xAxes: [
              {
                labelString:'5',
              },
              ]
        },

        tooltips:{
          enabled:true
        }
      }
    });


//
//清單//
$('table.table').DataTable(
  {
      "language": {
          "lengthMenu": "每 _MENU_ 筆",
          "zeroRecords": "無此搜尋項目",
          "info": "顯示第 _START_ 至 _END_ 項結果，共 _TOTAL_ 項",
          "infoEmpty": "沒有資料",
          "infoFiltered": "(filtered from _MAX_ total records)",
          "search":"搜尋",
          "paginate":{
              "first":"第一頁",
              "last":"最後一頁",
              "previous":"前一頁",
              "next":"下一頁",
      },
  },
  columnDefs: [
    { "width": "8%", "targets": 0},
    { targets: 1,
        "data":"img",
        render: function(data) {
            return '<img src="'+data+'" style="height:50px">'   
        },
        "width": "8%",
        "orderable": false,
    }, 
    { "width": "29%", "orderable": false, "targets": 2},
    { "width": "13%", "targets": 3},
    { "width": "13%", "targets": 4},
    { "width": "13%", "targets": 5},
    { "width": "8%", "orderable": false, "targets": 6},
    { "width": "8%", "orderable": false, "targets": 7}
]
})
