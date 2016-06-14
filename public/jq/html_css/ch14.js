$(document).ready(function(){

    $('#html').text(
        '<h2>Header 2</h2>'
    );
});

$('#test').click(function(){
    var ans = document.getElementById('previewTarget').contentWindow.document;
    var bs = $(ans).find('h2').css('border-style');

    if(bs == "dotted dashed solid double"){
        swal("Good job!", "", "success");
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
    }

    else{
        sweetAlert("Oops...","Something went wrong!", "error");
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
});
