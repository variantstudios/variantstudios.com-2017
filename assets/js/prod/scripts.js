$(document).ready(function(){Modernizr.mq("only all")?$("html").addClass("mq"):$("html").addClass("no-mq"),$(".front-slider").slick({infinite:!0,slidesToShow:3,slidesToScroll:3,adaptiveHeight:!0}),TweenLite.to("#hamburger",0,{display:"block"}),TweenLite.to(".main-wrapper",1,{delay:1.2,ease:Expo.easeInOut,opacity:1}),TweenLite.from(".header-wrapper",.5,{ease:Back.easeOut.config(.3),top:-200}),TweenLite.from(".menu-corner ",.5,{delay:1,ease:Back.easeOut.config(.4),top:-300,right:-100}),TweenLite.from(".footer-wrapper",.5,{delay:1.2,ease:Back.easeOut.config(.4),bottom:-50}),$(".footer-wrapper div").on("mouseenter",function(){TweenLite.to(this,.5,{ease:Back.easeOut,bottom:5})}),$(".footer-wrapper div").on("mouseleave",function(){TweenLite.to(this,.2,{ease:Back.easeOut,bottom:0})}),$(".footer-wrapper div").on("click",function(){TweenLite.to(".main-wrapper",.5,{ease:Back.easeOut,backgroundColor:"rgba(36,36,36,0.78)"})});var e=!1;TweenLite.fromTo("#first",0,{drawSVG:"0%"},{drawSVG:"0%",immediateRender:!1}),TweenLite.fromTo("#middle",0,{drawSVG:"0%"},{drawSVG:"0%",immediateRender:!1}),TweenLite.fromTo("#second",0,{drawSVG:"1%"},{drawSVG:"0%",immediateRender:!1}),TweenLite.to(".menu-text",.5,{opacity:1,ease:Power1.easeInOut}),TweenLite.to("#first",.5,{delay:1.2,drawSVG:"14%",ease:Power1.easeInOut,stroke:"#552959"}),TweenLite.to("#middle",.6,{delay:1.2,drawSVG:"100%",ease:Power1.easeInOut,stroke:"#BE5B3E"}),TweenLite.to("#second",.7,{delay:1.2,drawSVG:"11.5%",ease:Power1.easeInOut,stroke:"#F08431"}),$(".trigger").click(function(){e?($(".menu-text").text("menu"),TweenLite.to(".overlay",.5,{ease:Expo.easeInOut,opacity:"0",zIndex:0,display:"none"}),TweenLite.to("ul.menu",.5,{ease:Expo.easeInOut,opacity:"0",left:"10px",zIndex:0}),TweenLite.to("#first",.4,{drawSVG:"0% 14%",ease:Power1.easeInOut}),TweenLite.to("#middle",.3,{drawSVG:"0% 100%",ease:Power1.easeInOut}),TweenLite.to("#second",.4,{drawSVG:"0% 11.5%",ease:Power1.easeInOut})):(TweenLite.to(".overlay",.8,{ease:Expo.easeInOut,opacity:"1",zIndex:1,display:"block"}),TweenLite.to("ul.menu",.9,{ease:Expo.easeInOut,opacity:"1",left:"110px",zIndex:1}),$(".menu-text").text("close"),TweenLite.to("#first",.5,{drawSVG:"78% 93%",ease:Power1.easeInOut}),TweenLite.to("#middle",.4,{drawSVG:"50% 50%",ease:Power1.easeInOut}),TweenLite.to("#second",.5,{drawSVG:"81.5% 94%",ease:Power1.easeInOut})),e=!e})});