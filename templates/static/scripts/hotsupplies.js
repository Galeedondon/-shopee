function deleteClass() {
    document.getElementById("collapseOne").className+=" show";
    document.getElementById("collapseTwo").classList.remove("show");
    document.getElementById("collapseThree").classList.remove("show");
    var x ="綜合類別";
    var y ="";
    document.getElementById("search1").innerHTML = x;
    document.getElementById("search2").innerHTML = y;
    document.getElementById("search3").innerHTML = y;
    document.getElementById("hotchart1").style.display = "block";
    document.getElementById("hotchart2").style.display = "none";
    document.getElementById("hotchart3").style.display = "none";
    document.getElementById("hotchart4").style.display = "none";
}
function addClass1() {
    document.getElementById("collapseOne").classList.remove("show");
    document.getElementById("collapseTwo").className+=" show";
    document.getElementById("collapseThree").classList.remove("show");
    var x = document.getElementById("001").textContent;
    document.getElementById("search1").innerHTML = x;
    document.getElementById("hotchart1").style.display = "none";
    document.getElementById("hotchart2").style.display = "block";
    document.getElementById("hotchart3").style.display = "none";
    document.getElementById("hotchart4").style.display = "none";
}
function addClass2() {
    document.getElementById("collapseOne").classList.remove("show");
    document.getElementById("collapseTwo").classList.remove("show");
    document.getElementById("collapseThree").className+=" show";
    var x = document.getElementById("002").textContent;
    document.getElementById("search2").innerHTML = x;
    document.getElementById("hotchart1").style.display = "none";
    document.getElementById("hotchart2").style.display = "none";
    document.getElementById("hotchart3").style.display = "block";
    document.getElementById("hotchart4").style.display = "none";
}
function addClass3() {
    var x = document.getElementById("003").textContent;
    document.getElementById("search3").innerHTML = x;
    document.getElementById("hotchart1").style.display = "none";
    document.getElementById("hotchart2").style.display = "none";
    document.getElementById("hotchart3").style.display = "none";
    document.getElementById("hotchart4").style.display = "block";
}

// 排行榜1
let HotChart1 = document.getElementById('HotChart1').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 12;
    Chart.defaults.global.defaultFontColor = '#777';

    let massPopChart1 = new Chart(HotChart1, {
      type:'bar',
      data:{
        labels:['直播下標專區', ' 乒乓球', '冷光線', '舉重訓練原理', '充氣加油棒', '青蛙燈電池','環狀彈力帶','免洗襪','水球','成人布口罩','運動肌貼','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
        datasets:[{
          label:
              'Population',
          data:[
              152627,
              120724,
              32576,
              30379,
              25802,
              22821,
              22267,
              21507,
              20450,
              20274,
              18798,
              18405,
              18335,
              17669,
              16945,
              16661,
              16396,
              15668,
              14443,
              13900,
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
            bottom:30,
            top:20,
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
// 排行榜2
let HotChart2 = document.getElementById('HotChart2').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 12;
    Chart.defaults.global.defaultFontColor = '#777';

    let massPopChart2 = new Chart(HotChart2, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['Panasonic碳鋅電池', ' Youtube訂閱觀看', '雙頭隨身碟', 'Facebook讚', '小米手環5', '金士頓隨身碟','小米手環4','Maxell鹼性電池','ig粉絲','AirPods保護套','MAGICELL電池','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
        datasets:[{
          label:
              'Population',
          data:[
              331583,
              320724,
              305761,
              303791,
              288002,
              278211,
              272670,
              271507,
              265450,
              261274,
              255798,
              18405,
              18335,
              17669,
              16945,
              16661,
              16396,
              15668,
              14443,
              13900,
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
            bottom:30,
            top:20,
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
// 排行榜3
let HotChart3 = document.getElementById('HotChart3').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 12;
    Chart.defaults.global.defaultFontColor = '#777';

    let massPopChart3 = new Chart(HotChart3, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['Hong Jin充電無線滑鼠', ' Hong Jin有線電靜滑鼠組', 'HJG-02S充電無線電競滑鼠', '筆電鍵盤保護膜', 'Hong Jin HJG-01電靜滑鼠', 'HP有線滑鼠','OMRON滑鼠','Logitech 靜音電靜滑鼠','藍芽音頻接收器','光學滑鼠','滑鼠墊','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
        datasets:[{
          label:
              'Population',
          data:[
              48562,
              46772,
              46512,
              45897,
              43897,
              43781,
              43512,
              43110,
              41987,
              40997,
              40223,
              18405,
              18335,
              17669,
              16945,
              16661,
              16396,
              15668,
              14443,
              13900,
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
            bottom:30,
            top:20,
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
// 排行榜4
let HotChart4 = document.getElementById('HotChart4').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 12;
    Chart.defaults.global.defaultFontColor = '#777';

    let massPopChart4 = new Chart(HotChart4, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['Hong Jin機械鍵盤', '機械電靜鍵盤', 'PJ01機械電靜鍵盤', '筆電鍵盤保護膜', 'Hong Jin HJ221-N電靜鍵盤', '羅技鍵盤','RAZER電靜鍵盤','CORSAIR電靜鍵盤','RGB電靜鍵盤','MARAH七彩電靜鍵盤','Esense電腦鍵盤','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
        datasets:[{
          label:
              'Population',
          data:[
              9106,
            7428,
            6921,
            5142,
            5088,
            4762,
              3529,
              3477,
              3269,
              3011,
              3001,
              2978,
              18335,
              17669,
              16945,
              16661,
              16396,
              15668,
              14443,
              13900,
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
            bottom:30,
            top:20,
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
      { targets: 1,
          "data":"img",
          render: function(data) {
              return '<img src="'+data+'" style="height:50px">'   
          },
          "width": "8%",
          "orderable": false,
      }, 
      { "width": "22%", "targets": 2},
      { "width": "13%", "targets": 3},
      { "width": "13%", "targets": 4},
      { "width": "13%", "targets": 5}
  ]
})
