$(function() {

    // header height
    $('.header').height($(window).height())
    $(window).resize(function() {
        $('.header').height($(window).height())
    });

    // Adding active class to link
    $('ul li ').click(function() {
        $(this).addClass('active').siblings().removeClass('active')
    });

    $('.header .overlay .content').css('marginTop', ($(window).height() - $('.header .overlay .content').height()) / 2)

    $('ul li a').click(function() {
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000)
    });

    //make auto slider
    (function autoSlider() {
        $('.slider .active').each(function() {
            $(this).delay(2000).fadeOut(1000, function() {
                $(this).removeClass('active').next().addClass('active').fadeIn();
                if ($(this).is(':last-child')) {
                    $(this).removeClass('active')
                    $('.slider div').eq(0).addClass('active').fadeIn();
                }
                autoSlider()
            })

        })
    }())


    //make image filter
    $('.portfolio ul li ').click(function() {
        $(this).addClass('active').siblings().removeClass('active');

        $('.portfolio .gallery .images').not('.' + $(this).data('value')).hide();
        $('.portfolio .gallery .images').filter('.' + $(this).data('value')).show();
        if ($('.portfolio ul li').filter('.active').is(':first-child')) {
            $('.portfolio .gallery .images').show()
        }
    });

})