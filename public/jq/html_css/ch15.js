$(document).ready(function(){

    $('#html').text(
        '<h1>Header 1</h1>'
    );
    $('#css').text(
        'h1 {border-style: solid;}'
    );
});

$('#test').click(function(){
    var ans = document.getElementById('previewTarget').contentWindow.document;
    var width = $(ans).find('h1').css('border-width');
    var color = $(ans).find('h1').css('border-color');

    if(width == "5px" && color == "rgb(0, 0, 255)"){
        swal("Good job!", "", "success");
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
        $('#t2').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
    }
    else if(color == "rgb(0, 0, 255)"){
        swal("Warning!", "Set the border width", "warning");
        $('#t2').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
    else if(width == "5px"){
        swal("Warning!", "Set the border color", "warning");
        $('#t2').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
    }
    else{
        sweetAlert("Oops...","Something went wrong!", "error");
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
        $('#t2').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
});
