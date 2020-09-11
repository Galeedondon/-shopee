$(document).ready(function () {

    $("#sidebar").mCustomScrollbar({
         theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        // open or close navbar
        $('#sidebar').toggleClass('active');
        // close dropdowns
        $('.collapse.in').toggleClass('in');
        // and also adjust aria-expanded attributes we use for the open/closed arrows
        // in our CSS
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

});
/*搜尋視窗*/
function opnsearch(){
    document.getElementById('light').style.display='block';
    document.getElementById('fade').style.display='block';
    // add listener to disable scroll
    document.getElementById('html').style.overflow='hidden';
    
    
}
function clssearch(){
    document.getElementById('light').style.display='none';
    document.getElementById('fade').style.display='none';
    // add listener to disable scroll
    document.getElementById('html').style.overflow='auto';
}
$('#form1 input').click(function(){
    if($(this).prop('checked')){
        $('#form1 input:checkbox').prop('checked',false);
        $(this).prop('checked',true);
    }
    var checkBox = document.getElementById("check1");
        if (checkBox.checked == true){
            document.getElementById("form2").style.visibility = "visible";
        } else {
            document.getElementById("form2").style.display = "hidden";
        }
});
$('#form2 input').click(function(){
    if($(this).prop('checked')){
        $('#form2 input:checkbox').prop('checked',false);
        $(this).prop('checked',true);
    }
    var checkBox = document.getElementById("check2");
        if (checkBox.checked == true){
            document.getElementById("form3").style.visibility = "visible";
        } else {
            document.getElementById("form3").style.display = "hidden";
        }
});
$('#form3 input').click(function(){
    if($(this).prop('checked')){
        $('#form3 input:checkbox').prop('checked',false);
        $(this).prop('checked',true);
    }
});
/*搜尋清單 */
$('table.searchlist').DataTable(
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
    { targets: 0,
        "img":"img",
        render: function(img) {
            return '<img src="'+img+'" style="height:50px">'   
        },
        "width": "25%",
        "orderable": false,
    }, 
    { "width": "75%", "targets": 1,"orderable": false},

    
]
})
