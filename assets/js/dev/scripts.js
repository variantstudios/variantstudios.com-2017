$(document).ready(function() {
// Add a class of .mq if the browser supports Media Query and '.no-mq' if it doesn't
  if (Modernizr.mq('only all')) {
    $('html').addClass('mq');
  } else {
    $('html').addClass('no-mq');
  }
  // Mobile Menu Funcation
  // $(".menu-btn").on('click touch', function() {
  //   $('.menu').toggleClass('show');
  // });


// Front Slider
$('.front-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  adaptiveHeight: true
});

// function setHeight() {
//     windowHeight = $(window).innerHeight();
//     $('.main-wrapper').css('min-height', windowHeight);
//   };
//   setHeight();
  
//   $(window).resize(function() {
//     setHeight();
//   });
// });


//TweenLite.from(".header-wrapper", 1, {ease: Elastic.easeOut.config(1, 0.3), top:-100});
TweenLite.from(".header-wrapper", 0.5, { ease: Back.easeOut.config(0.3), top:-100 });

TweenLite.from(".menu-corner ", 0.5, {delay: 1, ease: Back.easeOut.config(.4), top:-300, right: -100});

TweenLite.from(".footer-wrapper", 0.5, {delay: 1.2, ease: Back.easeOut.config(.4), bottom:-50});

  $('.footer-wrapper div').on('mouseenter',
  function() {
    TweenLite.to(this, 0.5, {ease:Back.easeOut, bottom:5});
  });
  $('.footer-wrapper div').on('mouseleave',
  function() {
    TweenLite.to(this, 0.2, {ease:Back.easeOut, bottom:0});
  });
  $('.footer-wrapper div').on('click',
  function() {
    TweenLite.to('.main-wrapper', 0.5, {ease:Back.easeOut, backgroundColor:"rgba(36,36,36,0.78)"});
  });

  

//  $('.menu-trigger').on('click',
//   function() {
//     console.log("open");
//     TweenLite.to(".header-wrapper", 0.4, {ease: Expo.easeOut, height:"100%"});
//     $('.open').removeClass( "open" );
//     $(this).addClass( "close" );
//     TweenLite.to(".menu-trigger #Line", 1, {rotation:45, transformOrigin:"50% 50%"});
//     TweenLite.to(".menu-trigger #Line2", .5, {opacity: 0});
//     TweenLite.to(".menu-trigger #Line3", 1, {rotation:315, transformOrigin:"50% 50%"});
     
//   });

//  $('.menu-corner .close').on('click',
//   function() {
//     console.log("close");
//     TweenLite.to(".header-wrapper", 0.4, {ease: Expo.easeOut, height:"200px"});
//     //  $(this).addClass( "open" );
//     //  $(this).removeClass( "close" );
//   });
  
  $('.menu-trigger.close').click(function(){
		$(this).toggleClass('open');
    $('.header-wrapper').toggleClass('open');  
	});


});
