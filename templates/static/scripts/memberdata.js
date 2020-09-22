var reader = new FileReader();

reader.onload = function(e) {
    $("#preview_img").attr("src", e.target.result);
}

$("#fileupload").change(function() {
    var upload_file = $("#fileupload")[0].files[0];
    reader.readAsDataURL(upload_file);
})

$('.addfiles').on('click', function() { $('#fileupload').click();return false;});