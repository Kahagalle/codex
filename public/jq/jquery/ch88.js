$(document).ready(function(){

    $('#html').text(
        '<h3 style="color: blue">Header 3</h3>'
    );
    $('#css').text(
        ''
    );
});

$('#test').click(function(){
    var ans = document.getElementById('previewTarget').contentWindow.document;
    var tv1 = $('body', ans).find('h3').text();

    if(tv1 == "rgb(0, 0, 255)"){
        swal("Good job!", "", "success");
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
    }
    else{
        sweetAlert("Oops...","Something went wrong!", "error");
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
});
