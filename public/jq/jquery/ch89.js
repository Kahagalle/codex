$(document).ready(function(){

    $('#html').text(
        '<h2>Header 2</h2>\n\n<p>Paragraph</p>\n\n<h3>Header 3</h3>'
    );
    $('#css').text(
        ''
    );
});

$('#test').click(function(){
    var ans = document.getElementById('previewTarget').contentWindow.document;
    var tv1 = $('body', ans).find('h2').text();

    if(tv1 == "Header 3"){
        swal("Good job!", "", "success");
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
    }
    else{
        sweetAlert("Oops...","Something went wrong!", "error");
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
});
