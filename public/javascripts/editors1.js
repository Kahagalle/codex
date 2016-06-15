$(function(){
    function GetHtml(){
        var html = $('.html').val();
        return html;
    }

    function getCss(){
        var Css = $('.css').val();
        return Css;
    }

    $('body') .on('keyup','.innerbox',function(){
        var targetp = document.getElementById('previewTarget').contentWindow.document;
        targetp.open();
        targetp.close();

        var html = GetHtml();
        var css = getCss();

        $('body', targetp).append(html);
        $('head', targetp).append('<style>'+css+'</style>');
    });

     $('#getS').click(function(){
     var sourceCode = $('#previewTarget').contents().find('html').html();
     swal("",sourceCode);
     return false;
     });
});