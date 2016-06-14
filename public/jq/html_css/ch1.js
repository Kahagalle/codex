$('#test').click(function(){
    var ans = document.getElementById('previewTarget').contentWindow.document;
    var count = $(ans).find('h1:first').text();
    if(count == "Hello"){
        swal("Good job!", "", "success");
        $('#menu-toggle').find('i').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-ok');
    }
    else{
        sweetAlert("Oops...", "Something went wrong!", "error");
        $('#menu-toggle').find('i').removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-remove');
    }
});
