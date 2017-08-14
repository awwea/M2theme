<!--
/**
 * Copyright © 2017 AWWEA. All rights reserved.
 * See COPYING.txt for license details.
 * Javascript Homepage
 */
-->
require(['jquery','owl.carousel/owl.carousel.min'], function ($) {
    $("#banner-slider-demo-4").owlCarousel({items: 1,autoplay: true, autoplayTimeout: 7000, autoplayHoverPause: true, navRewind: true, dots: false, animateIn: 'fadeIn', animateOut: 'fadeOut', loop: true, nav: true, navText: ["<em class='porto-icon-chevron-left'></em>","<em class='porto-icon-chevron-right'></em>"]
        });

    $(".main-container").remove();

    $("#half_1_owl .owl-carousel").owlCarousel({loop: true,margin: 10,autoplay: true,autoplayTimeout: 5000,autoplayHoverPause: true,navRewind: true,nav: false,dots: true,responsive: {0: {items:1},640: {items:2}}
    });

    $("#half_2_owl .owl-carousel").owlCarousel({loop: true,margin: 10,autoplay: true,autoplayTimeout: 5000,autoplayHoverPause: true,navRewind: true,nav: false,dots: true,responsive: {0: {items:1},640: {items:2}}
    });

    $("#half_3_owl .owl-carousel").owlCarousel({loop: true,margin: 10,autoplay: true,autoplayTimeout: 5000,autoplayHoverPause: true,navRewind: true,nav: false,dots: true,responsive: {0: {items:1},640: {items:2}}
    });

    $("#recommended .owl-carousel").owlCarousel({loop: true,margin: 10,autoplay: true,autoplayTimeout: 5000,autoplayHoverPause: true,navRewind: true,nav: false,dots: true,responsive: {0: {items:2},768: {items:3},992: {items:4},1200: {items:5}}
    });
});

require(['jquery'
    ], function ($) {
        $("#half-image-1").css("min-height",$("#half-content-1").outerHeight()+"px");
        $("#half-image-2").css("min-height",$("#half-content-2").outerHeight()+"px");
        $("#half-image-3").css("min-height",$("#half-content-3").outerHeight()+"px");
	setTimeout(function(){
        $("#half-image-1").css("min-height",$("#half-content-1").outerHeight()+"px");
        $("#half-image-2").css("min-height",$("#half-content-2").outerHeight()+"px");
        $("#half-image-3").css("min-height",$("#half-content-3").outerHeight()+"px");
    }, 5000);
    $(window).resize(function(){
    setTimeout(function(){
        $("#half-image-1").css("min-height",$("#half-content-1").outerHeight()+"px");
        $("#half-image-2").css("min-height",$("#half-content-2").outerHeight()+"px");
        $("#half-image-3").css("min-height",$("#half-content-3").outerHeight()+"px");
        }, 500);
    });
});