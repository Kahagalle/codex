$(document).ready(function(){

    $('#html').text(
        ''
    );
    $('#css').text(
        'var one = new Array(2, 5, 7, 9);\nvar two = new Array(22, 35, 67, 91);\n\ndocument.write(three);\ndocument.write("<br>");\ndocument.write();'
    );

});

$('#test').click(function(){
    var ans = document.getElementById('previewTarget').contentWindow.document;
    var tv1 = $('body', ans).text().search('2,5,7,9,22,35,67,91');
    var tv2 = $('body', ans).text().search('8');

    if(tv1 >= 0 && tv2 >= 0){
        swal("Good job!", "", "success");
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
        $('#t2').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');

    }
    else if(tv2 >= 0){
        swal("Warning!", "Concatenate arrays", "warning");
        $('#t2').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
    else if(tv1 >= 0){
        swal("Warning!", "Find the array length", "warning");
        $('#t2').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
    }
    else{
        sweetAlert("Oops...","Something went wrong!", "error");
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
        $('#t2').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
});
