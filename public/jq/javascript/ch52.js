$(document).ready(function(){

    $('#html').text(
        ''
    );
    $('#css').text(
        'var array = new Array(2, 5, 7, 9, 11, 23, 41);\n\ndocument.write(array);'
    );

});

$('#test').click(function(){
    var ans = document.getElementById('previewTarget').contentWindow.document;
    var tv1 = $('body', ans).text();

    if(tv1 == "2,5,7,9,11,23"){
        swal("Good job!", "", "success");
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
    }
    else{
        sweetAlert("Oops...","Something went wrong!", "error");
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
});
