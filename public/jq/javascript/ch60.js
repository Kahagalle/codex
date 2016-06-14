$(document).ready(function(){

    $('#html').text(
        '<form>\n   Username: <input type="text" id="username" /><br><br>\n   <input type="button" value="Submit" onclick="validator()"/>\n </form>\n\n<p id="msg"></p>'
    );
    $('#css').text(
        'function validator(){\n  var input = document.getElementById("username").value;\n  if (){\n    document.getElementById("msg").innerHTML = "Success";\n  }\n}'
    );

});

$('#test').click(function(){
    var ans = document.getElementById('previewTarget').contentWindow.document;
    var tv1 = $('body', ans).text().search('hello');

    if(tv1 == 124){
        swal("Good job!", "", "success");
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
    }
    else{
        sweetAlert("Oops...","Something went wrong!", "error");
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
});
