$(function(){
    
    $('.banner').each(function(){
    var $banner_img = $('.banner').find('li'),      // 모든 슬라이드
        banner_count = $banner_img.length,      // 슬라이드 개수 파악
        currentIndex = 0;                                       // 현재 슬라이드를 나타내는 인덱스
    
    setInterval(showNextSlide, 4000);
    
    function showNextSlide(){
        
        // 다음에 보여 줄 슬라이드의 인덱스
        // (만약 마지막 슬라이드라면 첫 번째 슬라이드의 인덱스를 저장)
        var nextIndex = (currentIndex + 1) % banner_count;
        
        // 현재 슬라이드를 페이드 아웃
        $banner_img.eq(currentIndex).fadeOut();
        
        // 다음 슬라이드를 페이드인
        $banner_img.eq(nextIndex).fadeIn();
        
        // 현재 표시된 슬라이드의 인덱스를 저장
        currentIndex = nextIndex;
        }
    });
});