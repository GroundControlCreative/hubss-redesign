// CLIENTS SLIDER 
$('.clients-slider .owl-carousel').owlCarousel({
    loop:true,
    autoplay:false,
    mouseDrag:false,
    touchDrag:false,
    autoplaySpeed:350,
    nav:true,
    dots:false,
    navText: ["<img src='assets/img/arrow-L.png' class='img-fluid'>","<img src='assets/img/arrow-R.png' class='img-fluid'>"],

    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:8
        },
        1200:{
            items:8
        }
    }
})




// Select 2 Initializer 
  $(document).ready(function() {
    $('.select-c').select2();
});

// ICON CHANGE ON MOUSE OVER
$(function(){

  $('.sol-img').bind('mouseenter mouseleave', function() {
  $(this).attr({
      src: $(this).attr('data-other-src') 
      , 'data-other-src': $(this).attr('src') 
  })
  });
})


// Hide .navbar on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.navbar').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.

    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.navbar').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.navbar').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}