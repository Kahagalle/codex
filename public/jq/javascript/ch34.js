$(document).ready(function(){

    $('#html').text(
        '<form>\n<input type="button" value="Click" onclick="Click()">\n</form> '
    );
    $('#css').text(
        'function Click(){\ndocument.write();\n}'
    );

});

$('#test').click(function(){
    var ans = document.getElementById('previewTarget').contentWindow.document;
    var tv1 = $('body', ans).text().search('Hello');

    if(tv1 >= 0){
        swal("Good job!", "", "success");
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
    }
    else{
        sweetAlert("Oops...","Something went wrong!", "error");
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
});
