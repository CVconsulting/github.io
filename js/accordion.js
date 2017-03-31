function accordion(){
    
    var study = $('.study').find('ul'),
        study_li = study.find('li');
    
    study_li.on('click', function(){
        $(this).siblings().removeClass('on');
        $(this).addClass('on');
        $(this).find('.study_info').css({'display':'block'});
        $(this).siblings().find('.study_info').css({'display':'none'});
        $(this).siblings().find('.bg_img').css({'display':'none'});
        $(this).find('.bg_img').css({'display':'block'});
        $(this).children('h3').css({'display':'none'});
        $(this).siblings().children('h3').fadeIn(700);
    });
}