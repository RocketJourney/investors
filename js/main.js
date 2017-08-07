$(document).ready(function() {
  "use strict";

  $('.open-image-popup').magnificPopup(
    {
      type:'image',
      mainClass: 'mfp-with-zoom',
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it
        duration: 100, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function
        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });

    $('.open-wiki-popup').magnificPopup({
      type:'inline',
      midClick: true
      }
    );

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
  })

  // Fixed Header
  $(window).scroll(function() {
    var value = $(this).scrollTop();
    if (value > 80)
    $(".navbar-default").css("background", "#ffd900");
    else
    $(".navbar-default").css("background", "transparent");
  })
