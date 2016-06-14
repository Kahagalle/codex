$(document).ready(function(){

    $('#html').text(
        '<p id="one">Paragraph 1</p>\n <p id="two">Paragraph 2</p>\n <p id="three">Paragraph 3</p>\n <p id="four">Paragraph 4</p>'
    );

});'<div class="first"><h2 class="header2">Header 2</h2>\n\n</div>'

$('#test').click(function(){
    var ans = document.getElementById('previewTarget').contentWindow.document;
    var tv1 = $(ans).find('p:first').css('color');
    var tv2 = $(ans).find('p:last').css('background-color');

    if(tv1 == "rgb(0, 0, 255)" && tv2 == "rgb(0, 128, 0)"){
        swal("Good job!", "", "success");
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
        $('#t2').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');

    }
    else if(tv2 == "rgb(0, 128, 0)"){
        swal("Warning!", "Change the paragraph 1", "warning");
        $('#t2').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
    else if(tv1 == "rgb(0, 0, 255)"){
        swal("Warning!", "Change the paragraph 4", "warning");
        $('#t2').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
    }
    else{
        sweetAlert("Oops...","Something went wrong!", "error");
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
        $('#t2').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
});
