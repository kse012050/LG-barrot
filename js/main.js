$(document).ready(function(){
    $('.functionArea .slider').bxSlider({
        slideMargin: 80,
        pager:false,
        controls:false
    });

    $('.productArea .slider').bxSlider({
        prevSelector : '.prevSelector',
        nextSelector : '.nextSelector',
        prevText : '<img src="images/slider_prev.png" alt="slider prev button">',
        nextText : '<img src="images/slider_next.png" alt="slider next button">',
        pagerCustom: '.thumbPager'
    });
});