$(document).ready(function(){

    $('#html').text(
        '<h2>Hello Puppy</h2>\n<img src="https://goo.gl/MxKaRD">\n<p>This is paragraph should be displayed on top of the image.</p>'
    );
    $('#css').text(
        'img {position: absolute;\nleft: 0px;\ntop: 0px;}'
    );

});

$('#test').click(function(){
    var ans = document.getElementById('previewTarget').contentWindow.document;
    var tv1 = $(ans).find('img').css('z-index');

    if(tv1 == "-1"){
        swal("Good job!", "", "success");
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
    }
    else{
        sweetAlert("Oops...","Something went wrong!", "error");
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
});
