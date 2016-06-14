$(document).ready(function(){
    $('#html').text(
        '<table style="width:100%">' + '</table>'
    );
});

$('#test').click(function(){
    var ans = document.getElementById('previewTarget').contentWindow.document;

    var tr = $(ans).find('tr').length;
    var td = $(ans).find('td').length;

    var text1 = $(ans).find('table td:nth-child(1)').text();
    var text2 = $(ans).find('table td:nth-child(2)').text();

    if(tr == 2){
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
    }
    else{
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }

    if(td == 4){
        $('#t2').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
    }
    else{
        $('#t2').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }

    if(text1=="TomSally" && text2=="2530"){
        $('#t3').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
    }
    else{
        $('#t3').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }

    if(text1=="TomSally" && text2=="2530" && tr == 2 && td == 4){
        swal("Good job!", "", "success");
    }
    else{
        sweetAlert("Oops...", "Something went wrong!", "error");
    }

});

