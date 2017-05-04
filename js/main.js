$(document).ready(function() {
    "use strict";

    // Anchor Smooth Scroll
    $('body').on('click', '.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 80)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // Intro Slider
    $('#main-slider').flexslider({
        animation: "fade",
        slideshowSpeed: 3500,
        controlNav: false,
        directionNav: false
    });

    // Laptop Slider
    $('#laptop-slider').flexslider({
        animation: "slide",
        slideshowSpeed: 3500,
        controlNav: false,
        directionNav: false
    });

    $('.ls-prev').on('click', function() {
        $('#laptop-slider').flexslider('prev')
        return false;
    })

    $('.ls-next').on('click', function() {
        $('#laptop-slider').flexslider('next')
        return false;
    })

    // Fullwidth Slider
    $('#intro6-slider').flexslider({
        animation: "slide",
        slideshowSpeed: 5000,
        animationSpeed: 1000,
        controlNav: false,
        directionNav: true
    });

    $('.is-prev').on('click', function() {
        $('#intro6-slider').flexslider('prev')
        return false;
    })

    $('.is-next').on('click', function() {
        $('#intro6-slider').flexslider('next')
        return false;
    })

    // Scrollspy
    $('body').scrollspy({
        target: ".navbar",
        offset: 105
    })

    // Video Lightbox
    $( '.swipebox-video' ).swipebox();
})

// Fixed Header
$(window).scroll(function() {
    var value = $(this).scrollTop();
    if (value > 80)
        $(".navbar-default").css("background", "#ffcc00");
    else
        $(".navbar-default").css("background", "transparent");
})
