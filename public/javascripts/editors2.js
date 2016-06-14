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

        var script1 = myIframe.contentWindow.document.createElement("script");
        script1.type = 'text/javascript';
        script1.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js';
        myIframe.contentWindow.document.body.appendChild(script1);

        var script2 = myIframe.contentWindow.document.createElement("script");
        script2.type = 'text/javascript';
        script2.text = css;
        myIframe.contentWindow.document.body.appendChild(script2);

    });



    /* $('#getS').click(function(){
     var sourceCode = $('#previewTarget').contents().find('html').html();
     alert(sourceCode);
     return false;
     });*/
});