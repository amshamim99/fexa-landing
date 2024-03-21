(function ($) {
"use strict";

    // Scroll to demos
    $( '.scroll-down-demo' ).on( 'click', function(e){
        e.preventDefault();
        var href = $(this).attr( 'href' );
        $( 'html, body' ).animate({
            scrollTop: $( href ).offset().top - 120
        }, 1000 );
    });
     // Scroll to catagories
     $( '.scroll-down-catagories' ).on( 'click', function(e){
        e.preventDefault();
        var href = $(this).attr( 'href' );
        $( 'html, body' ).animate({
            scrollTop: $( href ).offset().top -0
        }, 2000 );
    });

 })(jQuery);