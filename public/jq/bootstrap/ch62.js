$(document).ready(function(){

    $('#html').text(
        '<div class="container-fluid">\n <div>\n <div id="d1" style="background-color:lightyellow;"> Div 1</div>\n <div id="d2" style="background-color:lavender;"> Div 2 </div>\n </div>\n </div>'
    );
});

$('#test').click(function(){
    var ans = document.getElementById('previewTarget').contentWindow.document;
    var tv1 = $(ans).find('#d1').attr('class');
    var tv2 = $(ans).find('#d2').attr('class');

    if(tv1 == "col-xs-9" && tv2 == "col-xs-3"){
        swal("Good job!", "", "success");
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
    }
    else{
        sweetAlert("Oops...", "Something went wrong!", "error");
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
});
