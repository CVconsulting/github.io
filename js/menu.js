$(document).ready(function() {
    var menu_icon = $('.gnbBox > button');
    
    menu_icon.on('click', function(){
		var nav = $('.gnbBox > ul');
        $(this).toggleClass('close_btn');
		nav.toggleClass('navOn');
    });
});
