$(document).ready(function(){
    $('.functionArea .slider').bxSlider({
        pager:false,
        controls:false
    })
    

    $('.productArea .slider').bxSlider({
        prevSelector : '.prevSelector',
        nextSelector : '.nextSelector',
        prevText : '<img src="images/slider_prev.png" alt="slider prev button">',
        nextText : '<img src="images/slider_next.png" alt="slider next button">',
        pagerCustom: '.thumbPager'
    });

    $('.SpeciArea table tr > *:nth-child(2)').addClass('active');
    $('.SpeciArea .tabBtn button').click(function(){
        $('.SpeciArea .tabBtn button').removeClass('active');
        $(this).addClass('active');
        $('.SpeciArea table tr > *').removeClass('active');
        $('.SpeciArea table tr > *:nth-child('+ ($(this).index() + 2) +')').addClass('active');
    })

    $(window).scroll(function(){
        if($(window).scrollTop() > $('[data-scrollEvent="mainProduct"]').offset().top){
            $('[data-scrollEvent="mainProduct"]').addClass('scrollEvent');
            $('.mainArea').addClass('scrollEvent');
            $('.mainArea .homeArea p').addClass('scrollEvent');
        }

        $('[data-scrollEvent="leftArea"]').children('*').each(function(){
            $(this).css({
                'transition-delay': $(this).index() / 4 + 's'
            });
        });

        $('[data-scrollEvent]:not([data-scrollEvent="mainProduct"])').each(function(){
            if($(window).scrollTop() > $(this).offset().top - $(window).height() / 1.3){
                $(this).addClass('scrollEvent');
            }
        })
    })
});