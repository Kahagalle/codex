$(document).ready(function(){

    $('#html').text(
        '<form>\n   Username: <input type="text" name="username" /><br><br>\n   Password: <input type="password" name="password" /><br><br>\n   <input type="submit" value="Submit" />\n </form>\n\n<p id="len"></p>\n<p id="name"></p>'
    );
    $('#css').text(
        '\ndocument.getElementById("len").innerHTML = "Length = " +length;\ndocument.getElementById("name").innerHTML = "Name is " +name;'
    );

});

$('#test').click(function(){
    var ans = document.getElementById('previewTarget').contentWindow.document;
    var tv1 = $('body', ans).text().search('3');
    var tv2 = $('body', ans).text().search('username');

    if(tv1 >= 0 && tv2 >= 0){
        swal("Good job!", "", "success");
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
        $('#t2').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');

    }
    else if(tv2 >= 0){
        swal("Warning!", "Find the form length", "warning");
        $('#t2').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
    else if(tv1 >= 0){
        swal("Warning!", "Find the 1st element name", "warning");
        $('#t2').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
    }
    else{
        sweetAlert("Oops...","Something went wrong!", "error");
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
        $('#t2').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
});
