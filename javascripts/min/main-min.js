function animatecounters(){jQuery({ValuerHbcO:0}).delay(0).animate({ValuerHbcO:312},{duration:2e3,easing:"swing",step:function(){$("#anim-number-pizza").text(Math.ceil(this.ValuerHbcO))}}),jQuery({ValuerHbcO:0}).delay(0).animate({ValuerHbcO:980},{duration:2e3,easing:"swing",step:function(){$("#anim-number-client").text(Math.ceil(this.ValuerHbcO))}}),jQuery({ValuerHbcO:0}).delay(0).animate({ValuerHbcO:810},{duration:2e3,easing:"swing",step:function(){$("#anim-number-projects").text(Math.ceil(this.ValuerHbcO))}}),jQuery({ValuerHbcO:0}).delay(0).animate({ValuerHbcO:600},{duration:2e3,easing:"swing",step:function(){$("#anim-number-comments").text(Math.ceil(this.ValuerHbcO))}}),jQuery({ValuerHbcO:0}).delay(0).animate({ValuerHbcO:450},{duration:2e3,easing:"swing",step:function(){$("#counter1").text(Math.ceil(this.ValuerHbcO))}}),jQuery({ValuerHbcO:0}).delay(0).animate({ValuerHbcO:687},{duration:2e3,easing:"swing",step:function(){$("#counter2").text(Math.ceil(this.ValuerHbcO))}}),jQuery({ValuerHbcO:0}).delay(0).animate({ValuerHbcO:835},{duration:2e3,easing:"swing",step:function(){$("#counter3").text(Math.ceil(this.ValuerHbcO))}}),jQuery({ValuerHbcO:0}).delay(0).animate({ValuerHbcO:450},{duration:2e3,easing:"swing",step:function(){$("#counter4").text(Math.ceil(this.ValuerHbcO))}}),jQuery({ValuerHbcO:0}).delay(0).animate({ValuerHbcO:875},{duration:2e3,easing:"swing",step:function(){$("#counter5").text(Math.ceil(this.ValuerHbcO))}}),jQuery({ValuerHbcO:0}).delay(0).animate({ValuerHbcO:458},{duration:2e3,easing:"swing",step:function(){$("#counter6").text(Math.ceil(this.ValuerHbcO))}}),jQuery({ValuerHbcO:0}).delay(0).animate({ValuerHbcO:696},{duration:2e3,easing:"swing",step:function(){$("#counter7").text(Math.ceil(this.ValuerHbcO))}})}function isScrolledIntoView(e){try{var o=$(window).scrollTop(),t=o+$(window).height(),i=$(e).offset().top,n=i+$(e).height();return t>=i&&n>=o}catch(a){return!1}}function SetResizeHeaderMenu(){var e=jQuery("nav.navbar").children("div.container").width();$("ul.mega-menu-full").each(function(){jQuery(this).css("width",e+"px")})}function SetParallax(){$(window).width()>1030&&!IsParallaxGenerated&&($(".parallax1").parallax("50%",.1),$(".parallax2").parallax("50%",.2),$(".parallax3").parallax("50%",.3),$(".parallax4").parallax("50%",.4),$(".parallax5").parallax("50%",.5),$(".parallax6").parallax("50%",.6),$(".parallax7").parallax("50%",.7),$(".parallax8").parallax("50%",.8),$(".parallax9").parallax("50%",.05),$(".parallax10").parallax("50%",.02),$(".parallax11").parallax("50%",.01),$(".parallax12").parallax("50%",.099),IsParallaxGenerated=!0)}function scrollToDown(){var e=$("#features");$("html, body").animate({scrollTop:$(e).offset().top},800)}function scrollToDownSection(){var e=$("#about");$("html, body").animate({scrollTop:$(e).offset().top},800)}function SetResizeContent(){var e=$(window).height();$(".full-screen").css("min-height",e)}var $portfolio,$masonry_block,$portfolio_selectors,$blog;$(document).ready(function(){function e(){var e=!0;return $("#contactusform input[type=text]").each(function(o){1==o?/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())?$("#contactusform").find("input:eq("+o+")").css({border:"1px solid #dfdfdf"}):($("#contactusform").find("input:eq("+o+")").css({border:"1px solid red"}),e=!1):0==o&&(null==$(this).val()||""==$(this).val()?($("#contactusform").find("input:eq("+o+")").css({border:"1px solid red"}),e=!1):$("#contactusform").find("input:eq("+o+")").css({border:"1px solid #dfdfdf"}))}),e}function o(){var e=!0;return $("#notifymeform input[type=text]").each(function(o){0==o&&(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())?$("#notifymeform").find("input:eq("+o+")").css({border:"1px solid #dfdfdf"}):($("#notifymeform").find("input:eq("+o+")").css({border:"1px solid red"}),e=!1))}),e}function t(){var e=!0;return $("#free30daytrialform input[type=text]").each(function(o){1==o?/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())?$("#free30daytrialform").find("input:eq("+o+")").css({border:"1px solid #dfdfdf"}):($("#free30daytrialform").find("input:eq("+o+")").css({border:"1px solid red"}),e=!1):0==o&&(null==$(this).val()||""==$(this).val()?($("#free30daytrialform").find("input:eq("+o+")").css({border:"1px solid red"}),e=!1):$("#free30daytrialform").find("input:eq("+o+")").css({border:"1px solid #dfdfdf"}))}),e}function i(){var e=!0;return $("#eventform input[type=text]").each(function(o){0==o&&(null==$(this).val()||""==$(this).val()?($("#eventform").find("input:eq("+o+")").css({border:"1px solid red"}),e=!1):$("#eventform").find("input:eq("+o+")").css({border:"1px solid #dfdfdf"}))}),e}function n(){var e=!0;return $("#careersform input[type=text]").each(function(o){1==o?/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())?$("#careersform").find("input:eq("+o+")").css({border:"1px solid #dfdfdf"}):($("#careersform").find("input:eq("+o+")").css({border:"1px solid red"}),e=!1):0==o?null==$(this).val()||""==$(this).val()?($("#careersform").find("input:eq("+o+")").css({border:"1px solid red"}),e=!1):$("#careersform").find("input:eq("+o+")").css({border:"1px solid #dfdfdf"}):2==o&&(null==$(this).val()||""==$(this).val()?($("#careersform").find("input:eq("+o+")").css({border:"1px solid red"}),e=!1):$("#careersform").find("input:eq("+o+")").css({border:"1px solid #dfdfdf"}))}),e}animatecounters(),jQuery(".inner-top").smoothScroll({speed:900,offset:-68}),SetResizeHeaderMenu();var a=!1,l=!1;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(a=!0),/iPhone|iPad|iPod/i.test(navigator.userAgent)&&(l=!0),a||jQuery(".top-cart a.shopping-cart, .cart-content").hover(function(){jQuery(".cart-content").css("opacity","1"),jQuery(".cart-content").css("visibility","visible")},function(){jQuery(".cart-content").css("opacity","0"),jQuery(".cart-content").css("visibility","hidden")}),l&&jQuery(".video-wrapper").css("display","none"),jQuery(".top-cart a.shopping-cart").click(function(){"visible"==$(".cart-content").css("visibility")?(jQuery(".cart-content").css("opacity","0"),jQuery(".cart-content").css("visibility","hidden")):(jQuery(".cart-content").css("opacity","1"),jQuery(".cart-content").css("visibility","visible"))}),$(window).scrollTop()>10?$("nav").addClass("shrink-nav"):$("nav").removeClass("shrink-nav"),Modernizr.touch?($(".close-overlay").removeClass("hidden"),$(".porfilio-item").click(function(e){$(this).hasClass("hover")||$(this).addClass("hover")}),$(".close-overlay").click(function(e){e.preventDefault(),e.stopPropagation(),$(this).closest(".porfilio-item").hasClass("hover")&&$(this).closest(".porfilio-item").removeClass("hover")})):$(".porfilio-item").mouseenter(function(){$(this).addClass("hover")}).mouseleave(function(){$(this).removeClass("hover")}),$portfolio=$(".masonry-items"),$portfolio.imagesLoaded(function(){$portfolio.isotope({itemSelector:"li",layoutMode:"masonry"})}),$masonry_block=$(".masonry-block-items"),$masonry_block.imagesLoaded(function(){$masonry_block.isotope({itemSelector:"li",layoutMode:"masonry"})}),$portfolio_selectors=$(".portfolio-filter > li > a"),$portfolio_selectors.on("click",function(){$portfolio_selectors.parent().removeClass("active"),$(this).parent().addClass("active");var e=$(this).attr("data-filter");return $portfolio.isotope({filter:e}),!1}),$blog=$(".blog-masonry"),$blog.imagesLoaded(function(){$blog.isotope({itemSelector:".blog-listing",layoutMode:"masonry"})}),$(window).resize(function(){setTimeout(function(){$portfolio.isotope("layout"),$blog.isotope("layout"),$masonry_block.isotope("layout")},500)}),SetParallax(),$("#owl-demo").owlCarousel({navigation:!0,slideSpeed:300,paginationSpeed:400,singleItem:!0,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]}),$("#owl-demo-small").owlCarousel({navigation:!0,slideSpeed:300,paginationSpeed:400,singleItem:!0,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]}),$("#owl-demo-products").owlCarousel({navigation:!0,slideSpeed:300,paginationSpeed:400,singleItem:!0,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]}),$("#owl-demo-background").owlCarousel({transitionStyle:"fade",autoPlay:3e3,slideSpeed:100,singleItem:!0,navigation:!1,pagination:!1,touchDrag:!1,mouseDrag:!1}),$("#blog-slider-grid").owlCarousel({navigation:!0,pagination:!1,slideSpeed:300,paginationSpeed:400,singleItem:!0,items:1,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]}),$("#blog-slider").owlCarousel({navigation:!1,items:3,itemsDesktop:[1200,3],itemsTablet:[800,2],itemsMobile:[700,1]}),$("#approach-slider").owlCarousel({navigation:!1,items:3,itemsDesktop:[1200,3],itemsTablet:[800,3],itemsMobile:[700,1]}),$("#testimonial-slider").owlCarousel({navigation:!1,items:3,itemsDesktop:[1200,3],itemsTablet:[800,3],itemsMobile:[700,1]}),$("#shop-products").owlCarousel({navigation:!0,items:3,itemsDesktop:[1200,3],itemsTablet:[800,3],itemsMobile:[700,1],navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]}),$("#owl-demo-brand").owlCarousel({navigation:!0,items:4,itemsDesktop:[1200,4],itemsTablet:[800,3],itemsMobile:[700,1],navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]}),$(".chart").easyPieChart({barColor:"#fff",trackColor:"#535353",scaleColor:!1,easing:"easeOutBounce",scaleLength:1,lineCap:"round",lineWidth:1,size:120,animate:{duration:2e3,enabled:!0},onStep:function(e,o,t){$(this.el).find(".percent").text(Math.round(t))}}),$(".chart2").easyPieChart({easing:"easeOutCirc",barColor:"#767676",trackColor:"#c7c7c7",scaleColor:!1,easing:"easeOutBounce",scaleLength:1,lineCap:"round",lineWidth:2,size:120,animate:{duration:2e3,enabled:!0},onStep:function(e,o,t){$(this.el).find(".percent").text(Math.round(t))}}),$(".owl-pagination > .owl-page").click(function(e){return $(e.target).is(".mfp-close")?void 0:!1}),$(".owl-buttons > .owl-prev").click(function(e){return $(e.target).is(".mfp-close")?void 0:!1}),$(".owl-buttons > .owl-next").click(function(e){return $(e.target).is(".mfp-close")?void 0:!1}),jQuery(".revolution-agency-intro").show().revolution({dottedOverlay:"none",delay:9e3,startwidth:1170,startheight:700,hideThumbs:200,thumbWidth:100,thumbHeight:50,thumbAmount:5,navigationType:"none",navigationArrows:"solo",navigationStyle:"preview2",touchenabled:"on",onHoverStop:"off",swipe_velocity:.7,swipe_min_touches:1,swipe_max_touches:1,drag_block_vertical:!1,keyboardNavigation:"on",navigationHAlign:"center",navigationVAlign:"bottom",navigationHOffset:0,navigationVOffset:20,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:20,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:20,soloArrowRightVOffset:0,shadow:0,fullWidth:"off",fullScreen:"on",spinner:"spinner1",stopLoop:"off",stopAfterLoops:-1,stopAtSlide:-1,shuffle:"off",forceFullWidth:"off",fullScreenAlignForce:"off",minFullScreenHeight:"400",hideThumbsOnMobile:"off",hideNavDelayOnMobile:1500,hideBulletsOnMobile:"off",hideArrowsOnMobile:"off",hideThumbsUnderResolution:0,hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,startWithSlide:0,fullScreenOffsetContainer:".header"}),jQuery(".revolution-agency-intro2").show().revolution({dottedOverlay:"none",delay:9e3,startwidth:1920,startheight:980,hideThumbs:200,thumbWidth:100,thumbHeight:50,thumbAmount:5,navigationType:"none",navigationArrows:"none",navigationStyle:"none",touchenabled:"on",onHoverStop:"off",swipe_velocity:.7,swipe_min_touches:1,swipe_max_touches:1,drag_block_vertical:!1,keyboardNavigation:"on",navigationHAlign:"center",navigationVAlign:"bottom",navigationHOffset:0,navigationVOffset:20,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:20,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:20,soloArrowRightVOffset:0,shadow:0,fullWidth:"off",fullScreen:"on",spinner:"spinner1",stopLoop:"off",stopAfterLoops:-1,stopAtSlide:-1,shuffle:"off",forceFullWidth:"off",fullScreenAlignForce:"off",minFullScreenHeight:"400",hideThumbsOnMobile:"off",hideNavDelayOnMobile:1500,hideBulletsOnMobile:"off",hideArrowsOnMobile:"off",hideThumbsUnderResolution:0,hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,startWithSlide:0,fullScreenOffsetContainer:".header"}),jQuery(".revolution-product-intro").show().revolution({dottedOverlay:"none",delay:9e3,startwidth:1920,startheight:980,hideThumbs:200,thumbWidth:100,thumbHeight:50,thumbAmount:5,navigationType:"none",navigationArrows:"none",navigationStyle:"none",touchenabled:"on",onHoverStop:"off",swipe_velocity:.7,swipe_min_touches:1,swipe_max_touches:1,drag_block_vertical:!1,keyboardNavigation:"on",navigationHAlign:"center",navigationVAlign:"bottom",navigationHOffset:0,navigationVOffset:20,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:20,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:20,soloArrowRightVOffset:0,shadow:0,fullWidth:"off",fullScreen:"on",spinner:"spinner1",stopLoop:"off",stopAfterLoops:-1,stopAtSlide:-1,shuffle:"off",forceFullWidth:"off",fullScreenAlignForce:"off",minFullScreenHeight:"400",hideThumbsOnMobile:"off",hideNavDelayOnMobile:1500,hideBulletsOnMobile:"off",hideArrowsOnMobile:"off",hideThumbsUnderResolution:0,hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,startWithSlide:0,fullScreenOffsetContainer:".header"}),jQuery(".revolution-intro-restaurant").show().revolution({dottedOverlay:"none",delay:9e3,startwidth:1920,startheight:980,hideThumbs:200,thumbWidth:100,thumbHeight:50,thumbAmount:5,navigationType:"none",navigationArrows:"none",navigationStyle:"none",touchenabled:"on",onHoverStop:"off",swipe_velocity:.7,swipe_min_touches:1,swipe_max_touches:1,drag_block_vertical:!1,keyboardNavigation:"on",navigationHAlign:"center",navigationVAlign:"bottom",navigationHOffset:0,navigationVOffset:20,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:20,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:20,soloArrowRightVOffset:0,shadow:0,fullWidth:"off",fullScreen:"on",spinner:"spinner1",stopLoop:"off",stopAfterLoops:-1,stopAtSlide:-1,shuffle:"off",forceFullWidth:"off",fullScreenAlignForce:"off",minFullScreenHeight:"400",hideThumbsOnMobile:"off",hideNavDelayOnMobile:1500,hideBulletsOnMobile:"off",hideArrowsOnMobile:"off",hideThumbsUnderResolution:0,hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,startWithSlide:0,fullScreenOffsetContainer:".header"}),jQuery(".revolution-slider-half").show().revolution({dottedOverlay:"none",delay:9e3,startwidth:1170,startheight:700,hideThumbs:200,thumbWidth:100,thumbHeight:50,thumbAmount:5,navigationType:"none",navigationArrows:"solo",navigationStyle:"preview1",touchenabled:"on",onHoverStop:"on",swipe_velocity:.7,swipe_min_touches:1,swipe_max_touches:1,drag_block_vertical:!1,keyboardNavigation:"on",navigationHAlign:"center",navigationVAlign:"bottom",navigationHOffset:0,navigationVOffset:20,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:20,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:20,soloArrowRightVOffset:0,shadow:0,fullWidth:"on",fullScreen:"off",spinner:"spinner0",stopLoop:"off",stopAfterLoops:-1,stopAtSlide:-1,shuffle:"off",autoHeight:"off",forceFullWidth:"off",hideThumbsOnMobile:"off",hideNavDelayOnMobile:1500,hideBulletsOnMobile:"off",hideArrowsOnMobile:"off",hideThumbsUnderResolution:0,hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,startWithSlide:0,parallax:"mouse",parallaxBgFreeze:"on",parallaxLevels:[7,4,3,2,5,4,3,2,1,0]}),jQuery(".revolution-slider-full").show().revolution({dottedOverlay:"none",delay:9e3,startwidth:1170,startheight:700,hideThumbs:200,thumbWidth:100,thumbHeight:50,thumbAmount:5,navigationType:"none",navigationArrows:"solo",navigationStyle:"preview1",touchenabled:"on",onHoverStop:"on",swipe_velocity:.7,swipe_min_touches:1,swipe_max_touches:1,drag_block_vertical:!1,keyboardNavigation:"on",navigationHAlign:"center",navigationVAlign:"bottom",navigationHOffset:0,navigationVOffset:20,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:20,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:20,soloArrowRightVOffset:0,shadow:0,fullWidth:"off",fullScreen:"on",spinner:"spinner0",stopLoop:"off",stopAfterLoops:-1,stopAtSlide:-1,shuffle:"off",forceFullWidth:"off",fullScreenAlignForce:"off",minFullScreenHeight:"400",hideThumbsOnMobile:"off",hideNavDelayOnMobile:1500,hideBulletsOnMobile:"off",hideArrowsOnMobile:"off",hideThumbsUnderResolution:0,hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,startWithSlide:0,fullScreenOffsetContainer:".header"}),jQuery(".photography-revolution-slider-full").show().revolution({dottedOverlay:"none",delay:9e3,startwidth:1170,startheight:700,hideThumbs:200,thumbWidth:100,thumbHeight:50,thumbAmount:5,navigationType:"bullet",navigationArrows:"none",navigationStyle:"preview5",touchenabled:"on",onHoverStop:"on",swipe_velocity:.7,swipe_min_touches:1,swipe_max_touches:1,drag_block_vertical:!1,keyboardNavigation:"on",navigationHAlign:"center",navigationVAlign:"bottom",navigationHOffset:0,navigationVOffset:20,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:20,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:20,soloArrowRightVOffset:0,shadow:0,fullWidth:"off",fullScreen:"on",spinner:"spinner0",stopLoop:"off",stopAfterLoops:-1,stopAtSlide:-1,shuffle:"off",forceFullWidth:"off",fullScreenAlignForce:"off",minFullScreenHeight:"400",hideThumbsOnMobile:"off",hideNavDelayOnMobile:1500,hideBulletsOnMobile:"off",hideArrowsOnMobile:"off",hideThumbsUnderResolution:0,hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,startWithSlide:0,fullScreenOffsetContainer:".header"}),jQuery(".revolution-intro-travel").show().revolution({dottedOverlay:"none",delay:9e3,startwidth:1920,startheight:980,hideThumbs:200,thumbWidth:100,thumbHeight:50,thumbAmount:5,navigationType:"none",navigationArrows:"solo",navigationStyle:"preview2",touchenabled:"on",onHoverStop:"off",swipe_velocity:.7,swipe_min_touches:1,swipe_max_touches:1,drag_block_vertical:!1,keyboardNavigation:"on",navigationHAlign:"center",navigationVAlign:"bottom",navigationHOffset:0,navigationVOffset:20,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:20,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:20,soloArrowRightVOffset:0,shadow:0,fullWidth:"off",fullScreen:"on",spinner:"spinner1",stopLoop:"off",stopAfterLoops:-1,stopAtSlide:-1,shuffle:"off",forceFullWidth:"off",fullScreenAlignForce:"off",minFullScreenHeight:"400",hideThumbsOnMobile:"off",hideNavDelayOnMobile:1500,hideBulletsOnMobile:"off",hideArrowsOnMobile:"off",hideThumbsUnderResolution:0,hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,startWithSlide:0,fullScreenOffsetContainer:".header"}),jQuery(".revolution-intro-travel2").show().revolution({dottedOverlay:"none",delay:9e3,startwidth:1920,startheight:980,hideThumbs:200,thumbWidth:100,thumbHeight:50,thumbAmount:5,navigationType:"none",navigationArrows:"solo",navigationStyle:"preview2",touchenabled:"on",onHoverStop:"off",swipe_velocity:.7,swipe_min_touches:1,swipe_max_touches:1,drag_block_vertical:!1,keyboardNavigation:"on",navigationHAlign:"center",navigationVAlign:"bottom",navigationHOffset:0,navigationVOffset:20,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:20,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:20,soloArrowRightVOffset:0,shadow:0,fullWidth:"off",fullScreen:"on",spinner:"spinner1",stopLoop:"off",stopAfterLoops:-1,stopAtSlide:-1,shuffle:"off",forceFullWidth:"off",fullScreenAlignForce:"off",minFullScreenHeight:"400",hideThumbsOnMobile:"off",hideNavDelayOnMobile:1500,hideBulletsOnMobile:"off",hideArrowsOnMobile:"off",hideThumbsUnderResolution:0,hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,startWithSlide:0,fullScreenOffsetContainer:".header",parallax:"mouse",parallaxBgFreeze:"on",parallaxLevels:[7,4,3,2,5,4,3,2,1,0]}),jQuery(".revolution-intro-fashion").show().revolution({dottedOverlay:"none",delay:9e3,startwidth:1900,startheight:977,hideThumbs:200,thumbWidth:100,thumbHeight:50,thumbAmount:5,navigationType:"none",navigationArrows:"solo",navigationStyle:"preview4",touchenabled:"on",onHoverStop:"off",swipe_velocity:.7,swipe_min_touches:1,swipe_max_touches:1,drag_block_vertical:!1,keyboardNavigation:"on",navigationHAlign:"center",navigationVAlign:"bottom",navigationHOffset:0,navigationVOffset:20,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:20,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:20,soloArrowRightVOffset:0,shadow:0,fullWidth:"off",fullScreen:"on",spinner:"spinner1",stopLoop:"off",stopAfterLoops:-1,stopAtSlide:-1,shuffle:"off",forceFullWidth:"off",fullScreenAlignForce:"off",minFullScreenHeight:"400",hideThumbsOnMobile:"off",hideNavDelayOnMobile:1500,hideBulletsOnMobile:"off",hideArrowsOnMobile:"off",hideThumbsUnderResolution:0,hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,startWithSlide:0,fullScreenOffsetContainer:".header"}),jQuery(".revolution-masonry-portfolio").show().revolution({dottedOverlay:"none",delay:9e3,startwidth:1170,startheight:700,hideThumbs:200,thumbWidth:100,thumbHeight:50,thumbAmount:5,navigationType:"none",navigationArrows:"solo",navigationStyle:"preview1",touchenabled:"off",onHoverStop:"off",swipe_velocity:.7,swipe_min_touches:1,swipe_max_touches:1,drag_block_vertical:!1,keyboardNavigation:"off",navigationHAlign:"center",navigationVAlign:"bottom",navigationHOffset:0,navigationVOffset:20,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:20,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:20,soloArrowRightVOffset:0,shadow:0,fullWidth:"on",fullScreen:"off",spinner:"spinner0",stopLoop:"on",stopAfterLoops:1,stopAtSlide:1,shuffle:"off",autoHeight:"off",forceFullWidth:"off",hideThumbsOnMobile:"off",hideNavDelayOnMobile:1500,hideBulletsOnMobile:"off",hideArrowsOnMobile:"off",hideThumbsUnderResolution:0,hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,startWithSlide:0,parallax:"mouse",parallaxBgFreeze:"on",parallaxLevels:[7,4,3,2,5,4,3,2,1,0]}),jQuery(".revolution-onepage-restaurant").show().revolution({dottedOverlay:"none",delay:9e3,startwidth:1170,startheight:700,hideThumbs:200,thumbWidth:100,thumbHeight:50,thumbAmount:5,navigationType:"none",navigationArrows:"solo",navigationStyle:"preview2",touchenabled:"on",onHoverStop:"off",swipe_velocity:.7,swipe_min_touches:1,swipe_max_touches:1,drag_block_vertical:!1,keyboardNavigation:"on",navigationHAlign:"center",navigationVAlign:"bottom",navigationHOffset:0,navigationVOffset:20,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:20,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:20,soloArrowRightVOffset:0,shadow:0,fullWidth:"off",fullScreen:"on",spinner:"spinner1",stopLoop:"off",stopAfterLoops:-1,stopAtSlide:-1,shuffle:"off",forceFullWidth:"off",fullScreenAlignForce:"off",minFullScreenHeight:"400",hideThumbsOnMobile:"off",hideNavDelayOnMobile:1500,hideBulletsOnMobile:"off",hideArrowsOnMobile:"off",hideThumbsUnderResolution:0,hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,startWithSlide:0,fullScreenOffsetContainer:".header"});var r=new WOW({boxClass:"wow",animateClass:"animated",offset:90,mobile:!1,live:!0});r.init(),$(".collapse").on("show.bs.collapse",function(){var e=$(this).attr("id");$('a[href="#'+e+'"]').closest(".panel-heading").addClass("active-accordion"),$('a[href="#'+e+'"] .panel-title span').html('<i class="fa fa-minus"></i>')}),$(".collapse").on("hide.bs.collapse",function(){var e=$(this).attr("id");$('a[href="#'+e+'"]').closest(".panel-heading").removeClass("active-accordion"),$('a[href="#'+e+'"] .panel-title span').html('<i class="fa fa-plus"></i>')}),$(".nav.navbar-nav a.inner-link").click(function(){$(this).parents("ul.navbar-nav").find("a.inner-link").removeClass("active"),$(this).addClass("active"),$(".navbar-header .navbar-toggle").is(":visible")&&$(this).parents(".navbar-collapse").collapse("hide")}),$(".accordion-style2 .collapse").on("show.bs.collapse",function(){var e=$(this).attr("id");$('a[href="#'+e+'"]').closest(".panel-heading").addClass("active-accordion"),$('a[href="#'+e+'"] .panel-title span').html('<i class="fa fa-angle-up"></i>')}),$(".accordion-style2 .collapse").on("hide.bs.collapse",function(){var e=$(this).attr("id");$('a[href="#'+e+'"]').closest(".panel-heading").removeClass("active-accordion"),$('a[href="#'+e+'"] .panel-title span').html('<i class="fa fa-angle-down"></i>')}),$(".accordion-style3 .collapse").on("show.bs.collapse",function(){var e=$(this).attr("id");$('a[href="#'+e+'"]').closest(".panel-heading").addClass("active-accordion"),$('a[href="#'+e+'"] .panel-title span').html('<i class="fa fa-angle-up"></i>')}),$(".accordion-style3 .collapse").on("hide.bs.collapse",function(){var e=$(this).attr("id");$('a[href="#'+e+'"]').closest(".panel-heading").removeClass("active-accordion"),$('a[href="#'+e+'"] .panel-title span').html('<i class="fa fa-angle-down"></i>')}),$("toggles .collapse").on("show.bs.collapse",function(){var e=$(this).attr("id");$('a[href="#'+e+'"]').closest(".panel-heading").addClass("active-accordion"),$('a[href="#'+e+'"] .panel-title span').html('<i class="fa fa-minus"></i>')}),$("toggles .collapse").on("hide.bs.collapse",function(){var e=$(this).attr("id");$('a[href="#'+e+'"]').closest(".panel-heading").removeClass("active-accordion"),$('a[href="#'+e+'"] .panel-title span').html('<i class="fa fa-plus"></i>')}),$(".toggles-style2 .collapse").on("show.bs.collapse",function(){var e=$(this).attr("id");$('a[href="#'+e+'"]').closest(".panel-heading").addClass("active-accordion"),$('a[href="#'+e+'"] .panel-title span').html('<i class="fa fa-angle-up"></i>')}),$(".toggles-style2 .collapse").on("hide.bs.collapse",function(){var e=$(this).attr("id");$('a[href="#'+e+'"]').closest(".panel-heading").removeClass("active-accordion"),$('a[href="#'+e+'"] .panel-title span').html('<i class="fa fa-angle-down"></i>')});try{$(".fit-videos").fitVids()}catch(s){}var f=$("#content");$("#scroll_to_top").fadeIn("slow"),$("#nav_down").fadeIn("slow"),$(window).bind("scrollstart",function(){$("#scroll_to_top,#nav_down").stop().animate({opacity:"0.2"})}),$(window).bind("scrollstop",function(){$("#scroll_to_top,#nav_down").stop().animate({opacity:"1"})}),$("#nav_down").click(function(e){$("html, body").animate({scrollTop:f.height()},800)}),$("#scroll_to_top").click(function(e){$("html, body").animate({scrollTop:"0px"},800)}),$("#success").hide(),$("#contact-us-button").click(function(){var o=e();o&&$.ajax({type:"POST",url:"contact.php",data:$("#contactusform").serialize(),success:function(e){$("input[type=text],textarea").each(function(){$(this).val("")}),$("#success").html(e),$("#success").fadeIn("slow"),$("#success").delay(4e3).fadeOut("slow")}})}),$("#notifyme-button").click(function(){var e=o();e&&$.ajax({type:"POST",url:"notifyme.php",data:$("#notifymeform").serialize(),success:function(e){$("input[type=text],textarea").each(function(){$(this).val("")}),$("#success").html(e),$("#success").fadeIn("slow"),$("#success").delay(4e3).fadeOut("slow")}})}),$("#success-free30daytrial").hide(),$("#free30daytrial-button").click(function(){var e=t();e&&$.ajax({type:"POST",url:"free30daytrial.php",data:$("#free30daytrialform").serialize(),success:function(e){$("input[type=text],textarea").each(function(){$(this).val("")}),$("#success-free30daytrial").html(e),$("#success-free30daytrial").fadeIn("slow"),$("#success-free30daytrial").delay(4e3).fadeOut("slow")}})}),$("#event-button").click(function(){var e=i();e&&$.ajax({type:"POST",url:"rsvp.php",data:$("#eventform").serialize(),success:function(e){$("input[type=text],textarea").each(function(){$(this).val("")}),$("#success").html(e),$("#success").fadeIn("slow"),$("#success").delay(4e3).fadeOut("slow")}})}),$("#careers-button").click(function(){var e=n();e&&$.ajax({type:"POST",url:"careers.php",data:$("#careersform").serialize(),success:function(e){$("input[type=text],textarea").each(function(){$(this).val("")}),$("#success").html(e),$("#success").fadeIn("slow"),$("#success").delay(4e3).fadeOut("slow")}})})});var inViewchart=!1,inViewanimnumberpizza=!1,inViewanimnumberclient=!1,inViewanimnumberprojects=!1,inViewanimnumbercomments=!1,inViewcounter1=!1,inViewcounter2=!1,inViewcounter3=!1,inViewcounter4=!1,inViewcounter5=!1,inViewcounter6=!1,inViewcounter7=!1;$(window).scroll(function(){$(window).scrollTop()>10?$("nav").addClass("shrink-nav"):$("nav").removeClass("shrink-nav"),isScrolledIntoView(".chart")&&0==inViewchart&&(inViewchart=!0,$(".chart").each(function(){try{$(this).data("easyPieChart").update(0),$(this).data("easyPieChart").update($(this).attr("data-percent"))}catch(e){}}),$(".chart2").each(function(){try{$(this).data("easyPieChart").update(0),$(this).data("easyPieChart").update($(this).attr("data-percent"))}catch(e){}})),isScrolledIntoView("#anim-number-pizza")&&0==inViewanimnumberpizza&&(inViewanimnumberpizza=!0,animatecounters()),isScrolledIntoView("#anim-number-projects")&&0==inViewanimnumberprojects&&(inViewanimnumberprojects=!0,animatecounters()),isScrolledIntoView("#anim-number-comments")&&0==inViewanimnumbercomments&&(inViewanimnumbercomments=!0,animatecounters()),isScrolledIntoView("#counter1")&&0==inViewcounter1&&(inViewcounter1=!0,animatecounters()),isScrolledIntoView("#counter2")&&0==inViewcounter2&&(inViewcounter2=!0,animatecounters()),isScrolledIntoView("#counter3")&&0==inViewcounter3&&(inViewcounter3=!0,animatecounters()),isScrolledIntoView("#counter4")&&0==inViewcounter4&&(inViewcounter4=!0,animatecounters()),isScrolledIntoView("#counter5")&&0==inViewcounter5&&(inViewcounter5=!0,animatecounters()),isScrolledIntoView("#counter6")&&0==inViewcounter6&&(inViewcounter6=!0,animatecounters()),isScrolledIntoView("#counter7")&&0==inViewcounter7&&(inViewcounter7=!0,animatecounters())}),$(".parallax-fix").each(function(){if($(this).children(".parallax-background-img").length){var e=jQuery(this).children(".parallax-background-img").attr("src");jQuery(this).css("background",'url("'+e+'")'),jQuery(this).children(".parallax-background-img").remove(),$(this).css("background-position","50% 0%")}});var IsParallaxGenerated=!1;$(window).resize(function(){$(this).width()>=780?$(".iphone6plus").addClass("landscape"):$(this).width()<780&&$(".iphone6plus").removeClass("landscape")}),$(".mobile-toggle").click(function(){$("nav").toggleClass("open-nav")}),$(".dropdown-arrow").click(function(){$(".mobile-toggle").is(":visible")&&($(this).children(".dropdown").hasClass("open-nav")?$(this).children(".dropdown").removeClass("open-nav"):($(".dropdown").removeClass("open-nav"),$(this).children(".dropdown").addClass("open-nav")))}),$(".dropdown-fullwidth").each(function(){$(this).css("width",$(".row").width());var e=-($("nav .row").innerWidth()-$(".menu").innerWidth()-15);$(this).css("left",e)});var scrollAnimationTime=1200,scrollAnimation="easeInOutExpo";$("a.scrollto").bind("click.smoothscroll",function(e){e.preventDefault();var o=this.hash;$("html, body").stop().animate({scrollTop:$(o).offset().top},scrollAnimationTime,scrollAnimation,function(){window.location.hash=o})}),$(".inner-link").smoothScroll({speed:900,offset:-0}),SetResizeContent(),$(window).resize(function(){$(".dropdown-fullwidth").each(function(){$(this).css("width",$(".row").width());
var e=-($("nav .row").innerWidth()-$(".menu").innerWidth()-15);$(this).css("left",e)}),SetResizeContent(),setTimeout(function(){SetResizeHeaderMenu()},200),$(window).width()>=992&&$(".navbar-collapse").hasClass("in")&&($(".navbar-collapse").removeClass("in"),$(".navbar-collapse ul.dropdown-menu").each(function(){$(this).hasClass("in")&&$(this).removeClass("in")}),$("ul.navbar-nav > li.dropdown > a.dropdown-toggle").addClass("collapsed"),$(".logo").focus(),$(".navbar-collapse a.dropdown-toggle").removeClass("active")),setTimeout(function(){SetParallax()},1e3)}),$("#counter-underconstruction").countdown("2015/12/15 12:00:00").on("update.countdown",function(e){var o=$(this).html(e.strftime('<div class="counter-container"><div class="counter-box first"><div class="number">%-D</div><span>Day%!d</span></div><div class="counter-box"><div class="number">%H</div><span>Hours</span></div><div class="counter-box"><div class="number">%M</div><span>Minutes</span></div><div class="counter-box last"><div class="number">%S</div><span>Seconds</span></div></div>'))}),$("#counter-wedding").countdown("2015/09/20 12:00:00").on("update.countdown",function(e){var o=$(this).html(e.strftime('<div class="counter-container"><div class="counter-box first"><div class="number">%-D</div><span>Day%!d</span></div><div class="counter-box"><div class="number">%H</div><span>Hours</span></div><div class="counter-box"><div class="number">%M</div><span>Minutes</span></div><div class="counter-box last"><div class="number">%S</div><span>Seconds</span></div></div>'))}),$(window).scroll(function(){$(this).scrollTop()>100?$(".scrollToTop").fadeIn():$(".scrollToTop").fadeOut()}),$(".scrollToTop").click(function(){return $("html, body").animate({scrollTop:0},1e3),!1});