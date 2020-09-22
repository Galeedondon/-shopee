
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#content').toggleClass('active');
    });
});

/*搜尋視窗*/
function opnsearch(){
    document.getElementById('light').style.display='block';
    document.getElementById('fade').style.display='block';
    // add listener to disable scroll
    document.getElementById('body').style.overflow='hidden';
}
function clssearch(){
    document.getElementById('light').style.display='none';
    document.getElementById('fade').style.display='none';
    // add listener to disable scroll
    document.getElementById('body').style.overflow='auto';
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

