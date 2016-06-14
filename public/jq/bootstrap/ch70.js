$(document).ready(function(){

    $('#html').text(
        ''
    );
});

$('#test').click(function(){
    var ans = document.getElementById('previewTarget').contentWindow.document;
    var tv1 = $(ans).find('div').attr('class');

    if(tv1 == "alert alert-success"){
        swal("Good job!", "", "success");
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
    }
    else{
        sweetAlert("Oops...", "Something went wrong!", "error");
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
});
