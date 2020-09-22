// 商品組合
let cmbChart = document.getElementById('cmbChart').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    let cbChart = new Chart(cmbChart, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['加厚棒球手套', '11.5反手/正手棒球手套', '經典款黑色手套', '高級皮革手套', '戰術球棒', '木棒','楓木壘球棒 B52-600','運動貼布','鋁棒','10','11','12','13','14','15'],
        datasets:[{
          label:
              'Population',
          data:[
            12.66,
              11.75,
              11.50,
              11.41,
              11.35,
              11.11,
            6.71,
            6.52,
            5.91,
            5.61,
            4.55,
              4.17,
              3.33,
          ],
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
            left:0,
            right:10,
            bottom:0,
            top:10,
          },
            margin:{
              
            },

        },

        tooltips:{
          enabled:true
        }
      }
    });
//
// 組合商品組合商品銷量
let cmbsellsChart = document.getElementById('cmbsellsChart').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 12;
    Chart.defaults.global.defaultFontColor = '#777';

    let cbslsChart = new Chart(cmbsellsChart, {
      type:'horizontalBar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{

        labels:['加厚棒球手套', '11.5反手/正手棒球手套', '經典款黑色手套', '高級皮革手套', '戰術球棒', '木棒','楓木壘球棒 B52-600','運動貼布','鋁棒','9','10','11','12','13','14','15'],
        datasets:[{
          label:
              'Population',
          data:[
            104,
            74,
            70,
            91,
            82,
            47,
              34,
              51,
              72,

          ],
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
            right:10,
            bottom:10,
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
          yAxes: [{
            scaleLabel: {
              display: false,
              labelString: '商品排序',
              fontFamily:'Arial'
            },
          }],
          xAxes: [
              {
                position: 'top',

              },
              ]
        }
      }
    });
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