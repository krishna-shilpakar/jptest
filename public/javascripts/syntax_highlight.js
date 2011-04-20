function styleCode() 
{
    if (typeof disableStyleCode != "undefined") 
    {
        return;
    }

    var a = false;

    $("pre code").parent().each(function() 
    {
        if (!$(this).hasClass("prettyprint")) 
        {
            $(this).addClass("prettyprint");
            a = true
        }
    });
    
    if (a) { prettyPrint() } 
}


function stylePreview() {
    $("#wmd-preview pre").addClass("prettyprint");
    $("#wmd-preview code").html(prettyPrintOne($("#wmd-preview code").html()));
}
