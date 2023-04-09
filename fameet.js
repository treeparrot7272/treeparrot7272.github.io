

$(function() {
    var $relation = $('input[id=relationBox]');
    var $name = $('input[id=nameBox]');
    var $theForm = $('#famForm');
    
    
   $theForm.on('submit', function(e) {
        e.preventDefault();
        var relatText = $relation.val();
        $('.relationWord').replaceWith('<span class="relationWord">'+ relatText + '</span>' )
        $relation.val('');
        var nameText = $name.val();
        $('.nameWord').replaceWith('<span class="nameWord">'+ nameText + '</span>' )
        $name.val('');
     });
});


/*

var miniMacro = $(function(span, box) => {
    var $strBox = $('input[id=' + box + ']');
    var newthing = $strBox.val();
    $('.' + span).replaceWith('<span class=' + span + newthing + '</span>');
    $strBox.val('');

 })

/ */