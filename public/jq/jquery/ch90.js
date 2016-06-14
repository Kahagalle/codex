$(document).ready(function(){

    $('#html').text(
        '<div>\n    <p>Paragraph 1</p>\n    <p>Paragraph 2</p>\n</div>'
    );
    $('#css').text(
        ''
    );
});

$('#test').click(function(){
    var ans = document.getElementById('previewTarget').contentWindow.document;
    var tv1 = $('body', ans).find('p').length;

    if(tv1 == 0){
        swal("Good job!", "", "success");
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
    }
    else{
        sweetAlert("Oops...","Something went wrong!", "error");
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
});
