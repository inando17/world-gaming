(function($) {

    'use strict';
    //Cache jQuery Selector
    var $window             = $(window),
        $loaderout			= $('.preloader'),
        $header             = $('header'), // for fixed-header & for navbar all
        $navigation         = $('#navbarSupportedContent'), //for navbar all
        $dropdown           = $('.dropdown-toggle'), //for navbar all
        $mix_tab			= $('.mix-tab'),
        $owl_carousel       = $('.owl-carousel'),
        $three_item			= $('.3block-carusel'),
        $three_item2		= $('.3block-carusel2'),
        $single_carousel    = $('.single-carousel'),
        $brand				= $('.partner-slider');





    // Preloader For Hide loader
    function handlePreloader() {
        if($loaderout.length){
            $loaderout.delay(500).fadeOut(500);
        }
    }

    // Auto active class adding with navigation //for navbar all
    $window.on('load', function() {
        var current = location.pathname;
        var $path = current.substring(current.lastIndexOf('http://unicoderbd.com/') + 1);
        $('#navbarSupportedContent li a').each(function(e) {
            var $this = $(this);
            // if the current path is like this link, make it active
            if ($path == $this.attr('href')) {
                $this.parent('li').addClass('active');
            } else if ($path == '') {
                $('.navbar-nav li:first-child').addClass('active');
            }
        });
        handlePreloader();
    });

    //Put slider space for nav not in mini screen //for navbar all
    if (document.querySelector('.nav-on-top') !== null) {
        var get_height = jQuery('.nav-on-top').height();
        if (get_height > 0 && $window.width() > 991) {
            jQuery('.nav-on-top').next().css('margin-top', get_height);
        }
        $window.on('resize', function() {
            $header.removeClass('fixed-top');
            var get_height = jQuery('.nav-on-top').height();
            if ($window.width() < 991) {
                jQuery('.nav-on-top').next().css('margin-top', '0');
            } else {
                jQuery('.nav-on-top').next().css('margin-top', get_height);
            }
        });
    }
    if (document.querySelector('.nav-on-banner') !== null) {
        var get_height = jQuery('.nav-on-banner').height();
        if (get_height > 0 && $window.width() > 991) {
            jQuery('.nav-on-banner').next().css('padding-top', get_height);
        }
        $window.on('resize', function() {
            $header.removeClass('fixed-top');
            var get_height = jQuery('.nav-on-banner').height();
            if ($window.width() < 991) {
                jQuery('.nav-on-banner').next().css('padding-top', '0');
            } else {
                jQuery('.nav-on-banner').next().css('padding-top', get_height);
            }
        });
    }


    // dropdown submenu on hover in desktopand dropdown sub menu on click in mobile //for navbar all
    $navigation.each(function() {
        $dropdown.on('click', function(e) {
            if ($window.width() < 1100) {
                if ($(this).parent('.dropdown').hasClass('visible')) {
                    //  $(this).parent('.dropdown').children('.dropdown-menu').first().stop(true, true).slideUp(300);
                    //  $(this).parent('.dropdown').removeClass('visible');
                    window.location = $(this).attr('href');
                } else {
                    e.preventDefault();
                    $(this).parent('.dropdown').siblings('.dropdown').children('.dropdown-menu').slideUp(300);
                    $(this).parent('.dropdown').siblings('.dropdown').removeClass('visible');
                    $(this).parent('.dropdown').children('.dropdown-menu').slideDown(300);
                    $(this).parent('.dropdown').addClass('visible');
                }
                e.stopPropagation();
            }
        });

        $('body').on('click', function(e) {
            $dropdown.parent('.dropdown').removeClass('visible');
        });

        $window.on('resize', function() {
            if ($window.width() > 991) {
                $('.dropdown-menu').removeAttr('style');
                $('.dropdown ').removeClass('visible');
            }
        });
    });

    // toogle fixed-top class in header when window scroll 200px //for fixed-header
    function headerStyle() {
        if ($header.length) {
            var windowpos = $window.scrollTop();
            if (windowpos >= 200) {
                $header.addClass('fixed-top');
            } else {
                $header.removeClass('fixed-top');
            }
        }
    }


    // Slider push menu visible
	if(document.querySelector('.push-nav-toggle') !== null) {
		var $this = $('.push-nav-toggle'),
			$close = $('.slide-nav-close'),
			$sidenav = $('.nav-leftpush-overlay .navbar-expand-lg .navbar-slide-push');
			
		$this.on('click', function(event){
			event.preventDefault();
			$sidenav.addClass('visible');
			$('#page_wrapper').addClass('overlay');
			event.stopPropagation();
		});
		
		
		$sidenav.on('click', function(event) {
			event.stopPropagation();
		});
		
		$window.on('click', function(e) {
			$sidenav.removeClass('visible');
			$('#page_wrapper').removeClass('overlay');
		});
		
		$close.on('click', function(e) {
			$sidenav.removeClass('visible');
			$('#page_wrapper').removeClass('overlay');
		});
		
	}

    // Click Search Icon and Open Search Field	
	var $srcicon = $('.search-pop span'),
    $srcfield = $('.search-form');
    $srcicon.on('click', function(event){
    event.preventDefault();
    $srcfield.addClass('visible');
    event.stopPropagation();
    });

    $srcfield.on('click', function(event){
        event.stopPropagation();
    });

    $window.on('click', function(e){
        $srcfield.removeClass('visible');
    });

    if ($single_carousel.length) {
        $single_carousel.owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: true,
            smartSpeed: 500,
            autoplay: 4000,
            responsive: {
                0: {
                    items: 1
                }
            }
        });
    }

    // Our Partner Logos Slider Auto
	if ($brand.length) {
		$brand.owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			dots: false,
			smartSpeed: 500,
			responsive:{
				0:{
					items:2
				},
				480:{
					items:3
				},
				600:{
					items:3
				},
				800:{
					items:4
				},
				1200:{
					items:5
				}
			}
		});    		
    }
    
    // Single Product Image Slide
	if(document.querySelector('.full-img-sweep') !== null) {
		$('.full-img-sweep').layerSlider({
			sliderVersion: '6.0.0',
			responsiveUnder: 0,
			layersContainer: 0,
			slideBGSize: 'auto',
			autoStart: 'false',
			showCircleTimer: 'false',
			skin: 'noskin',
			thumbnailNavigation: 'always',
			skinsPath: 'assets/skins/'
		});
    }
    
 
        

	//for input type number
    $('<div class="quantity-nav font-13 text-center"><div class="quantity-up">+</div><div class="quantity-down">-</div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
            var newVal = oldValue;
            } else {
            var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
            var newVal = oldValue;
            } else {
            var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

	});
	
	// Three Block Slide
	if ($three_item.length) {
		$three_item.owlCarousel({
            loop:true,
			nav:true,
			dots: true,
			smartSpeed: 500,
            autoplayHoverPause:true,
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1200:{
					items:3
				}
			}
		});    		
    }
    // Three Block Slide
	if ($three_item2.length) {
		$three_item2.owlCarousel({
            loop:true,
			nav:true,
			dots: true,
            smartSpeed: 500,
            center: true,
            autoplay: 4000,
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1200:{
					items:3
				}
			}
		});    		
    }
    if($owl_carousel.length){
        if($owl_carousel.hasClass('autoplay-on')){
            $owl_carousel.trigger('play.owl.autoplay',[2000])		
        }
        if($owl_carousel.hasClass('autoplay-off')){
            $owl_carousel.trigger('stop.owl.autoplay')	
        }
    }


    
    // Simple Accordean
	if($('.accorden-block').length){
		$('.accorden-title').on('click', function(){		
			if($(this).hasClass('active')){
				$(this).addClass('active');			
			}
			
			//if ($(this).next('.according_details').is(':visible')){
            //	$(this).removeClass('active');
            //	}
			else{
				$('.accorden-title').removeClass('active');
				$('.accorden-content').slideUp(300);
				$(this).addClass('active');
				$(this).next('.accorden-content').slideDown(300);	
			}
		});	
	}
    
    // Custom accordion useable settings for any type of accordion system
	if(document.querySelector('.bb-accordion') !== null) {
		$('.ac-toggle').click(function(e) {
			e.preventDefault();
		  
			var $this = $(this);
		  
			if ($this.hasClass('active') && $this.next().hasClass('show')) {
				$this.removeClass('active');
				$this.next().removeClass('show');
				$this.next().slideUp(350);
			} 
			else {
				
				// Check accordion type: for single item open
				if($this.parent().parent().hasClass('ac-single-show')){
					$this.parent().parent().find('.ac-card .ac-toggle').removeClass('active');
					$this.parent().parent().find('.ac-card .ac-collapse').removeClass('show');
					$this.parent().parent().find('.ac-card .ac-collapse').slideUp(350);
					$this.addClass('active');
					$this.next().addClass('show');
					$this.next().slideDown(350);
				}
				
				// Check accordion type: for group item open
				else if($this.parent().parent().hasClass('ac-group-show')) {
					$this.addClass('active');
					$this.next().addClass('show');
					$this.next().slideDown(350);
				}
				
				// Default if not use any accordion type
				else {
					$this.parent().parent().find('.ac-card .ac-toggle').removeClass('active');
					$this.parent().parent().find('.ac-card .ac-collapse').removeClass('show');
					$this.parent().parent().find('.ac-card .ac-collapse').slideUp(350);
					$this.addClass('active');
					$this.next().addClass('show');
					$this.next().slideDown(350);
				}
			}
		});
    }
    
    // MixIt-up tab calling
	if($mix_tab.length){
		var containerEl = document.querySelector('.mix-element');
		var mixer = mixitup(containerEl);
    }
    
    // Fact Counter For Achivement Counting
	function factCounter() {
		if($('.fact-counter').length){
			$('.fact-counter .count.animated').each(function() {
				var $t = $(this),
				 n = $t.find(".count-num").attr("data-stop"),
				 r = parseInt($t.find(".count-num").attr("data-speed"), 10);
				 
				if (!$t.hasClass("counted")) {
				 $t.addClass("counted");
				 $({
				  countNum: $t.find(".count-text").text()
				 }).animate({
				  countNum: n
				 }, {
				  duration: r,
				  easing: "linear",
				  step: function() {
				   $t.find(".count-num").text(Math.floor(this.countNum));
				  },
				  complete: function() {
				   $t.find(".count-num").text(this.countNum);
				  }
				 });
				}

				//set skill building height
				 var size = $(this).children('.progress-bar').attr('aria-valuenow');
				 $(this).children('.progress-bar').css('width', size+'%');

			});
		}
    }
    // Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}
    // Start When document is Scrollig, do //for fact-counting & fixed-header
    $window.on('scroll', function() {
        headerStyle();
        factCounter();
    });



    //Scroll top by clicking arrow up //for scroll-top
    $window.scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return !1;
    });
})(jQuery);