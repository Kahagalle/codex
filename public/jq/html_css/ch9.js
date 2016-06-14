$(document).ready(function(){
    $('#html').text(
        '<p>This is a paragraph.</p>'
    );
});

$('#test').click(function(){
    var ans = document.getElementById('previewTarget').contentWindow.document;
    var fnt = $(ans).find('p:first').css('font-size');
    var fmly = $(ans).find('p:first').css('font-family');

    if(fnt == "25px" && fmly == "arial"){
        swal("Good job!", "", "success");
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
        $('#t2').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
    }
    else if(fmly == "arial"){
        swal("Warning!", "Change font size", "warning");
        $('#t2').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
    else if(fnt == "25px"){
        swal("Warning!", "Change font family", "warning");
        $('#t2').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
    }
    else{
        sweetAlert("Oops...", "Something went wrong!", "error");
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
        $('#t2').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
});
