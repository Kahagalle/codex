$(document).ready(function(){

    $('#html').text(
        '<a href="#" onMouseOver="hover()">This is a link</a>'
    );
    $('#css').text(
        'function hover(){\ndocument.write();\n}'
    );

});

$('#test').click(function(){
    var ans = document.getElementById('previewTarget').contentWindow.document;
    var tv1 = $('body', ans).text();

    if(tv1 == "Hello"){
        swal("Good job!", "", "success");
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');

    }

    else{
        sweetAlert("Oops...","Something went wrong!", "error");
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
});
