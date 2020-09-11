// 關鍵字
let keywordChart = document.getElementById('keywordChart').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#777';

    let keyChart = new Chart(keywordChart, {
      type:'bubble', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['藍芽耳機', '11手機殼', '聖誕禮物', 'Adidas外套', '藍芽耳機', 'Switch遊戲片','小米行動電源','長版外套','小米耳機','室內拖鞋','短版上衣','Apple 11','防摔手機殼','NIKE外套','針織上衣','外套男','羊羔外套','Apple 64gb'],
        datasets:[{
          label:'藍芽耳機',
          data:[{
              x:44101,y:12,r:30,
          }],
          //backgroundColor:'green',
          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
          ],
            barPercentage:0.5,
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
        },{
          label:'11手機殼',
          data:[{
              x:23514,y:31,r:10
          }],
          //backgroundColor:'green',
          backgroundColor:[
            'rgba(54, 162, 235, 0.6)',
          ],
            barPercentage:0.5,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },{
          label:'聖誕禮物',
          data:[
              {x:8408,y:17,r:30}
              ],
          //backgroundColor:'green',
          backgroundColor:[
            'rgba(255, 206, 86, 0.6)',
          ],
            barPercentage:0.5,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },{
          label:'Adidas外套',
          data:[
              {x:14628,y:25,r:20}
              ],
          //backgroundColor:'green',
          backgroundColor:[
            'rgba(75, 192, 192, 0.6)',
          ],
            barPercentage:0.5,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },{
          label:'Switch遊戲片',
          data:[
              {x:44101,y:12,r:5}
              ],
          //backgroundColor:'green',
          backgroundColor:[
            'rgba(153, 102, 255, 0.6)',
          ],
            barPercentage:0.5,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },{
          label:'小米行動電源',
          data:[
              {x:9905,y:14,r:10}
              ],
          //backgroundColor:'green',
          backgroundColor:[
            'rgba(255, 159, 64, 0.6)',
          ],
            barPercentage:0.5,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },{
          label:'長版外套',
          data:[
              {x:12614,y:42,r:12}
              ],
          backgroundColor:'green',

            barPercentage:0.5,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },{
          label:'小米耳機',
          data:[
              {x:21415,y:28,r:66}
              ],
          backgroundColor:'black',

            barPercentage:0.5,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },{
          label:'室內拖鞋',
          data:[
              {x:7741,y:22,r:15}
              ],
          backgroundColor:'yellow',

            barPercentage:0.5,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },{
          label:'短版上衣',
          data:[
              {x:9841,y:20,r:55}
              ],
          backgroundColor:'brown',

            barPercentage:0.5,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },{
          label:'Apple 11',
          data:[
              {x:6472,y:17,r:40}
              ],
          backgroundColor:'red',

            barPercentage:0.5,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },{
          label:'防摔手機殼',
          data:[
              {x:28691,y:18,r:99}
              ],
          backgroundColor:'gray',

            barPercentage:0.5,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },{
          label:'外套女',
          data:[
              {x:31584,y:33,r:88}
              ],
          backgroundColor:'blue',

            barPercentage:0.5,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },{
          label:'NIKE外套',
          data:[
              {x:15234,y:22,r:44}
              ],
          backgroundColor:'orange',

            barPercentage:0.5,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },{
          label:'針織上衣',
          data:[
              {x:4213,y:31,r:30}
              ],
          backgroundColor:'purple',

            barPercentage:0.5,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },{
          label:'外套男',
          data:[
              {x:35791,y:44,r:30}
              ],
          backgroundColor:'pink',

            barPercentage:0.5,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },{
          label:'羊羔外套',
          data:[
              {x:8491,y:28,r:55}
              ],
          backgroundColor:
            'rgba(255, 128, 55, 0.6)',

            barPercentage:0.5,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },{
          label:'Apple 64gb',
          data:[
              {x:7463,y:17,r:42}
              ],
          //backgroundColor:'green',
          backgroundColor:[
            'rgba(55, 88, 132, 0.6)'
          ],
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
          display:true,
          position:'top',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:40,
            right:40,
            bottom:40,
            top:10,
          },
            margin:{
              bottom:110,
            },

        },

        tooltips:{
            enabled:true,
            callbacks: {
                label: function(t, d) {
                    rLabel = d.datasets[t.datasetIndex].data[t.index].r;
                    return d.datasets[t.datasetIndex].label + '('+'搜尋熱度：'+rLabel+ ', 銷售數量：' + t.xLabel + ', 賣家數量：' + t.yLabel + ')';
            }
         }
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