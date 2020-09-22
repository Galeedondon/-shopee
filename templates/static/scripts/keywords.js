
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
