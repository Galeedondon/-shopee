/*單一定價 */
$('table.table1').DataTable(
    {
        "language": {
            "lengthMenu": "",
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
            "width": "15%",
            "orderable": false,
        }, 
        { "width": "10%", "targets": 0 },
        { "width": "50%", "orderable": false, "targets": 2 },
        { "width": "25%", "targets": 3 },
    ]
})
/*組合定價 */
$('table.table2').DataTable(
    {
    "language": {
        "lengthMenu": "",
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
        }
    },
    columnDefs: [
        { targets: 1,
            "data1":"img",
            render: function(data1) {
                return '<img src="'+data1+'" style="height:50px">'   
            },
            "width": "8%",
            "orderable": false,
        }, 
        { targets: 4,
            "data2":"img",
            render: function(data2) {
                return '<img src="'+data2+'" style="height:50px">'   
            },
            "width": "8%",
            "orderable": false,
        }, 
        { "width": "8%", "targets": 0 },
        { "width": "28%", "orderable": false, "targets": 2 },
        { "width": "10%", "targets": 3 },
        { "width": "28%", "orderable": false, "targets": 5 },
        { "width": "10%", "targets": 6 },
    ]
})