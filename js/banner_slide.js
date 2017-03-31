$(function(){
        var eleWidth = $(".banner_box > li").innerWidth(),
            $banner = $(".banner_box > li"),
            state = false,
            playOn = false,
            direction = "left",
            time = "3000",
            bannerAuto,
            indi = "",
            b_box_li_width = $('.banner_box').find('li').width();
    
        $banner.each(function(i){
            indi += '<a href="#>' + (i + 1) + '</a>';
        });
        $('.indicator').html(indi);
    
    
        function left(){
            direction = "right";
            $(".banner_box").children("li:last").insertBefore($(".banner_box").children("li:first"));
            $(".banner_box").css({left:eleWidth*-1});
            $(".banner_box").animate({left:0},850,"swing", function(){
                state = false;
            });
        }
        function right(){
            direction = "left";
            $(".banner_box").animate({left:eleWidth*-1},850,"swing",function(){
                $(this).children("li:first").insertAfter($(this).children("li:last"));
                $(this).css({left:0});
                state = false;
            });
        }

        $(".btn_l").click(function(){
            if(!state){
                state = true;
                left();
            }
        });
        $(".btn_r").click(function(){
            if(!state){
                state = true;
                right();
            }
        });
});