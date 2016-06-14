$(document).ready(function(){

    $('#html').text(
        '<div>\n<h2>Header 2</h2>\n<p>Paragraph 1</p>\n <p>Paragraph 2</p>\n</div>\n\n <ul>\n <li>ABC</li>\n <li>PQR</li>\n </ul>'
    );

});'<div class="first"><h2 class="header2">Header 2</h2>\n\n</div>'

$('#test').click(function(){
    var ans = document.getElementById('previewTarget').contentWindow.document;
    var tv1 = $(ans).find('p').css('color');

    if(tv1 == "rgb(0, 0, 255)"){
        swal("Good job!", "", "success");
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
    }

    else{
        sweetAlert("Oops...","Something went wrong!", "error");
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
});
