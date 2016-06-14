$(document).ready(function(){

    $('#html').text(
        '<h2>Header 2</h2>\n<p>This is a paragraph</p>'
    );

});'<div class="first"><h2 class="header2">Header 2</h2>\n\n</div>'

$('#test').click(function(){
    var ans = document.getElementById('previewTarget').contentWindow.document;
    var tv1 = $(ans).find('h2').css('cursor');
    var tv2 = $(ans).find('p').css('cursor');

    if(tv1 == "not-allowed" && tv2 == "help"){
        swal("Good job!", "", "success");
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
        $('#t2').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');

    }
    else if(tv2 == "help"){
        swal("Warning!", "Change header cursor", "warning");
        $('#t2').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
    else if(tv1 == "not-allowed"){
        swal("Warning!", "Change paragraph cursor", "warning");
        $('#t2').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
    }
    else{
        sweetAlert("Oops...","Something went wrong!", "error");
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
        $('#t2').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
});
