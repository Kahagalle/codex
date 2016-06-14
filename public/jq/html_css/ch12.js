$(document).ready(function(){

    $('#html').text(
        '<h2>Header 2</h2>\n\n<p>This is a paragraph.</p>'
    );
});

$('#test').click(function(){
    var ans = document.getElementById('previewTarget').contentWindow.document;
    var tv1 = $(ans).find('h2').css('background-color');
    var tv2 = $(ans).find('p').css('background-color');
    var tv3 = $(ans).find('body').css('background-color');

    if (tv1 == "rgb(173, 216, 230)" && tv2 == "rgb(255, 255, 0)" && tv3 == "rgb(211, 211, 211)"){
        swal("Good job!", "", "success");
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
        $('#t2').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
        $('#t3').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
    }
    else if (tv1 == "rgb(173, 216, 230)" || tv2 == "rgb(255, 255, 0)" || tv3 == "rgb(211, 211, 211)"){
        if(tv1 == "rgb(173, 216, 230)"){
            swal("Warning!", "", "warning");
            $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
        }
        else{
            swal("Warning!", "", "warning");
            $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
        }

        if(tv2 == "rgb(255, 255, 0)"){
            swal("Warning!", "", "warning");
            $('#t2').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
        }
        else{
            swal("Warning!", "", "warning");
            $('#t2').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
        }

        if(tv3 == "rgb(211, 211, 211)"){
            swal("Warning!", " ", "warning");
            $('#t3').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
        }
        else{
            swal("Warning!", "", "warning");
            $('#t3').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
        }
    }
    else{
        sweetAlert("Oops...","Something went wrong!", "error");
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
        $('#t2').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
        $('#t3').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
});
