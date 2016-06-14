$(document).ready(function(){

    $('#html').text(
        '<h3 class="d1">Header - 1</h3>\n\n<h3 class="d2">Header - 2</h3>\n\n<h3 class="d3">Header - 3</h3>'
    );

});

$('#test').click(function(){
    var ans = document.getElementById('previewTarget').contentWindow.document;
    var tv1 = $('body', ans).find('h3:odd').is(":visible");

    if(tv1 == false){
        swal("Good job!", "", "success");
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
    }
    else{
        sweetAlert("Oops...","Something went wrong!", "error");
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
});
