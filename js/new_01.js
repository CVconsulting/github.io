$(function(){
	var notice = $('noticeBanner');
	var noticeLi = notice.children('li').eq();
	notice.width(noticeLi * '100%');
});