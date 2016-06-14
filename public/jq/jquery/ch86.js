$(document).ready(function(){

    $('#html').text(
        '<p id="p1">Paragraph 1</p>\n\n<p id="p2">Paragraph 2</p>'
    );
    $('#css').text(
        ''
    );
});

$('#test').click(function(){
    var ans = document.getElementById('previewTarget').contentWindow.document;
    var tv1 = $('body', ans).find('p:last').text();

    if(tv1 == "Paragraph 1"){
        swal("Good job!", "", "success");
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
    }
    else{
        sweetAlert("Oops...","Something went wrong!", "error");
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
});
