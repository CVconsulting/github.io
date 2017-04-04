	$(document).ready(function(){
		var w_wh = $(window).width(),
			w_ht = $(window).height(),
			container = $('.container');
		if(w_wh > 1079){
			container.width(w_wh + "!important");
			container.height(w_ht);
		}else if(w_wh < 1080){
			container.width("100%");
			container.height("auto");
		};

		$(window).resize(function(){
			if(w_wh > 1079){
		var w_wh = $(window).width(),
			w_ht = $(window).height(),
			container = $('.container');
				container.width(w_wh + "!important");
				container.height(w_ht);
			}else if(w_wh < 1080){
				container.width("100%");
				container.height("auto");
			};
		});
	});