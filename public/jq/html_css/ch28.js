$(document).ready(function(){

    $('#html').text(
        '<h1>Header 1</h1>\n<h3>Header 3</h3>\n<h3>Header 3</h3>\n<p>Paragraph 1</p>\n <p>Paragraph 2</p>'
    );

});'<div class="first"><h2 class="header2">Header 2</h2>\n\n</div>'

$('#test').click(function(){
    var ans = document.getElementById('previewTarget').contentWindow.document;
    var tv1 = $(ans).find('p').css('color');
    var tv2 = $(ans).find('h3').css('color');

    if(tv1 == "rgb(0, 0, 255)" && tv2 == "rgb(0, 0, 255)"){
        swal("Good job!", "", "success");
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');

    }
    else{
        sweetAlert("Oops...","Something went wrong!", "error");
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
});
