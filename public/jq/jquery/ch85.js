$(document).ready(function(){

    $('#html').text(
        '<h3>Header 3</h3>'
    );
    $('#css').text(
        '$("h3").click(function(){\n\n});'
    );
});

$('#test').click(function(){
    var ans = document.getElementById('previewTarget').contentWindow.document;
    var tv1 = $('body', ans).find('h3:first').is(":visible");
    var tv2 = $('body', ans).text().search('3000');

    if(tv1 == false && tv2 >= 0){
        swal("Good job!", "", "success");
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
    }
    else{
        sweetAlert("Oops...","Something went wrong!", "error");
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
});
