$(function () {
    "use strict";

    //preloader start    
    $(window).load(function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });
    //scroll to top button start
    $('.top_to').on('click',function () {
        $('html').animate({
            scrollTop: 0
        }, 1000);
    });
    $(window).on('scroll',function () {
        var $scrolling = $(this).scrollTop();

        if ($scrolling > 300) {
            $('.top_to').fadeIn();
        } else {
            $('.top_to').fadeOut();
        }
    });
    //toggle button start
    $('.menu-button').on('click',function () {
        $('.menu').toggleClass('view');
    });

    //active menu start    
    $('body').scrollspy({
        target: '#navbarSupportedContent'
    });

    //smooth scroll start   
    $('#menubar a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });

    //banner slide
    $('.banner-slide').slick({
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<i class="fa fa-chevron-left leftbtn"></i>',
        nextArrow: '<i class="fa fa-chevron-right rightbtn"></i>',
        autoplay: true,
        speed: 2000,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    //about image tilt
    const tilt = $('.js-tilt').tilt({
        maxTilt: 5,
    });
    //portfolio slide show
    $('.popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    //portfolio filtering
    var containerEl = document.querySelector('.p-image');
    var mixer = mixitup(containerEl);

    //portfolio menu active
    $('.p-menu li').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    //progress bar
    $(".skillbar").appear(function () {
        var color = $(this).find('.chart').data('color');
        var percent = $(this).find('.chart').data('percent');
        $(this).find('.chart').easyPieChart({
            barColor: '#b3995f',
            trackColor: '#fff',
            scaleColor: false,
            scaleLength: 5,
            lineWidth: 5,
            size: 150,
            lineCap: 'circle',
            animate: 1500
        });
    });

    //counter
    $('.count-item').counterUp({
        delay: 10,
        time: 1500
    });

    //testimonial slider  
    $('.testimonial-slide').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

});