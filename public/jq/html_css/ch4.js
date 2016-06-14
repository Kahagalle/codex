$('#test').click(function(){
    var ans = document.getElementById('previewTarget').contentWindow.document;

    var count = $(ans).find('li').length;

    var text1 = $(ans).find('ul li:nth-child(1)').text();
    var text2 = $(ans).find('ul li:nth-child(2)').text();
    var text3 = $(ans).find('ul li:nth-child(3)').text();

    if(text1 == "Cats" && text2 == "Dogs" && text3 == "Birds"){
        swal("Good job!", "", "success");
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
        $('#t2').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');

    }
    else if(count == 3){
        swal("Warning!", "Check the list items", "warning");
        $('#t1').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
        $('#t2').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
    else{
        sweetAlert("Oops...", "Something went wrong!", "error");
        $('#t1').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
        $('#t2').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }

});

