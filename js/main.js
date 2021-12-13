$(document).ready(function(){
    menuEvent();
    mainSlider();
    tabMenu();
    scrollEvnet();
});

function menuEvent(){
    $('header button').click(function(){
        $('header nav').stop().toggleClass('active');
        $(this).toggleClass('active');
        $('header nav li a').click(function(e){
            $('header button').removeClass('active');
            $('header nav').removeClass('active');
            $('header nav li').removeClass('active');
            $(this).parent().addClass('active')
        });
    });
    

    $('header nav').on('mousewheel touchmove',function(e){
        e.preventDefault();
    })

}

function mainSlider(){
    // function slider
    $('.functionArea .slider').bxSlider({
        pager:false,
    });

    // product slider
    $('.productArea .slider').bxSlider({
        prevSelector : '.prevSelector',
        nextSelector : '.nextSelector',
        prevText : '<img src="images/slider_prev.png" alt="slider prev button">',
        nextText : '<img src="images/slider_next.png" alt="slider next button">',
        pagerCustom: '.thumbPager'
    });
}

function tabMenu(){
    $('.speciArea table tr > *:nth-child(2)').addClass('active');
    $('.speciArea .tabBtn button').click(function(){
        $('.speciArea .tabBtn button').removeClass('active');
        $(this).addClass('active');
        $('.speciArea > div .tabImg > img').removeClass('active');
        $('.speciArea > div .tabImg > img').eq($(this).index()).addClass('active');
        $('.speciArea table tr:not(.noActive) > *').removeClass('active');
        $('.speciArea table tr > *:nth-child('+ ($(this).index() + 2) +')').addClass('active');
    })
}

function scrollEvnet(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 10){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }

        $('.barrotPage [id]').each(function(){
            $(this).index('.barrotPage [id]')
            if($(window).scrollTop() > $(this).offset().top - 10){
                $('header nav li').removeClass('active');
                $('header nav li').eq($(this).index('.barrotPage [id]')).addClass('active');
            }
        })
        

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
}
