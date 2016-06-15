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
        console.log(targetp);
        targetp.open();
        targetp.close();

        var html = GetHtml();
        var css = getCss();

        $('body', targetp).append(html);

        var myIframe = document.getElementById("previewTarget");

        $('head', targetp).append('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">');
        $('head', targetp).append('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css">');

        var script1 = myIframe.contentWindow.document.createElement("script");
        script1.type = 'text/javascript';
        script1.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js';
        myIframe.contentWindow.document.body.appendChild(script1);

        var script3 = myIframe.contentWindow.document.createElement("script");
        script3.type = 'text/javascript';
        script3.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js';
        myIframe.contentWindow.document.body.appendChild(script3);

        var script2 = myIframe.contentWindow.document.createElement("script");
        script2.type = 'text/javascript';
        script2.text = css;
        myIframe.contentWindow.document.body.appendChild(script2);

    });

     $('#getS').click(function(){
     var sourceCode = $('#previewTarget').contents().find('html').html();
     swal("",sourceCode);
     return false;
     });
});