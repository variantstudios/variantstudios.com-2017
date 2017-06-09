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
// $('.front-slider').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   adaptiveHeight: true,
//   arrows: false
// });

// function setHeight() {
//     windowHeight = $(window).innerHeight();
//     $('.main-wrapper').css('min-height', windowHeight);
//   };
//   setHeight();
  
//   $(window).resize(function() {
//     setHeight();
//   });
// });

$('.footer-blocks .block h3').click(function() {
  $('.footer-blocks .block').removeClass('open');
  $(this).parent().addClass('open');
  $('body').addClass('open-overlay');
});

$('.footer-blocks .footer-block-info').click(function() {
  $('.footer-blocks .block').removeClass('open');
  $('body').removeClass('open-overlay');
});


TweenLite.to("#hamburger", 0, { display:"block" });
TweenLite.to(".main-wrapper", 1, {delay: 1.2, ease: Expo.easeInOut, opacity:1 });
TweenLite.from(".header-wrapper", 0.5, { ease: Back.easeOut.config(0.3), top:-200 });



// TweenLite.from(".menu-corner ", 0.5, {delay: 1, ease: Back.easeOut.config(.4), top:-300, right: -100});

// TweenLite.from(".footer-wrapper", 0.5, {delay: 1.2, ease: Back.easeOut.config(.4), bottom:-50});

//   $('.footer-wrapper div').on('mouseenter',
//   function() {
//     TweenLite.to(this, 0.5, {ease:Back.easeOut, bottom:5});
//   });
//   $('.footer-wrapper div').on('mouseleave',
//   function() {
//     TweenLite.to(this, 0.2, {ease:Back.easeOut, bottom:0});
//   });
//   $('.footer-wrapper div').on('click',
//   function() {
//     TweenLite.to('.main-wrapper', 0.5, {ease:Back.easeOut, backgroundColor:"rgba(36,36,36,0.78)"});
//   });

  

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
  
  // $('.menu-trigger.close').click(function(){
	// 	$(this).toggleClass('open');
  //   $('.header-wrapper').toggleClass('open');  
	// });


  var open = false;

// TweenLite.from("#first", 0, {
//   drawSVG: "0% 0%",
//   ease: Power1.easeInOut,
//   stroke: "#552959"
// })

TweenLite.fromTo("#first", 0, {drawSVG:"0%"}, {drawSVG:"0%", immediateRender:false})
TweenLite.fromTo("#middle", 0, {drawSVG:"0%"}, {drawSVG:"0%", immediateRender:false})
TweenLite.fromTo("#second", 0, {drawSVG:"1%"}, {drawSVG:"0%", immediateRender:false})
//TweenLite.fromTo(".menu-text", 0, {opacity:0, immediateRender:false})
TweenLite.to(".menu-text", .5, {
  opacity:1,
  ease: Power1.easeInOut
})
TweenLite.to("#first", .5, {
  delay: 1.2,
  drawSVG: "14%",
  ease: Power1.easeInOut,
  stroke: "#552959",
})
TweenLite.to("#middle", .6, {
  delay: 1.2,
  drawSVG: "100%",
  ease: Power1.easeInOut,
  stroke: "#BE5B3E"
})
TweenLite.to("#second", .7, {
  delay: 1.2,
  drawSVG: "11.5%",
  ease: Power1.easeInOut,
  stroke: "#F08431"
})

//tl.timeScale(2);
$('.trigger').click(function() {
  //console.log("trigger");
  if (!open) {
    TweenLite.to(".overlay", 0.8, {ease: Expo.easeInOut, opacity:"1", zIndex:1, display: "block"});
    TweenLite.to("ul.menu", 0.9, {ease: Expo.easeInOut, opacity:"1", left: "15%", zIndex:1});
    $('.menu-text').text("close");
    TweenLite.to("#first", .5, {
      drawSVG: "78% 93%",
      ease: Power1.easeInOut
    });
    TweenLite.to("#middle", .4, {
      drawSVG: "50% 50%",
      ease: Power1.easeInOut
    });
    TweenLite.to("#second", .5, {
      drawSVG: "81.5% 94%",
      ease: Power1.easeInOut
    });
    
  } else {
    $('.menu-text').text("menu");
    TweenLite.to(".overlay", 0.5, { ease: Expo.easeInOut, opacity:"0", zIndex:0, display: "none"});
    TweenLite.to("ul.menu", 0.5, {ease: Expo.easeInOut, opacity:"0", left: "10px", zIndex:0});
    TweenLite.to("#first", .4, {
      drawSVG: "0% 14%",
      ease: Power1.easeInOut
    });
    TweenLite.to("#middle", .3, {
      drawSVG: "0% 100%",
      ease: Power1.easeInOut
    });
    TweenLite.to("#second", .4, {
      drawSVG: "0% 11.5%",
      ease: Power1.easeInOut
    });
  }
  open = !open;
});


});
