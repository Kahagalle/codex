$(document).ready(function(){

    $('#html').text(
        ' '
    );
    $('#css').text(
        'var x = 0;\nvar y = 40;\nvar z = 30;\n\nif (){\n   if (){\n\n    }\n}\ndocument.write(x);'
    );

});

$('#test').click(function(){
    var ans = document.getElementById('previewTarget').contentWindow.document;
    var tv1 = $('body', ans).text();

    if(tv1 == 100){
        swal("Good job!", "", "success");
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');

    }

    else{
        sweetAlert("Oops...","Something went wrong!", "error");
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
});
