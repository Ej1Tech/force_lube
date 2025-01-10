$(document).ready(function(){
	"use strict";




/*=========== TABLE OF CONTENTS ===========
1. Scroll To Top
2. welcome animation support
3. owl carousel
======================================*/

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 300) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});

	// 2. welcome animation support

        $(window).load(function(){
        	$(".welcome-hero-txt h2,.welcome-hero-txt p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".welcome-hero-txt button").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".welcome-hero-txt h2,.welcome-hero-txt p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".welcome-hero-txt button").addClass("animated fadeInDown").css({'opacity':'0'});
        });

	
	// 3. owl carousel

		// i.  products-carousel
		
			$("#products-carousel").owlCarousel({
				items: 1,
				autoplay:true,
				loop: true,
				dots:true,
				mouseDrag:true,
				nav:false,
				smartSpeed:1000,
				transitionStyle:"fade",
				animateIn: 'fadeIn',
				animateOut: 'fadeOutLeft'
				// navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
			});


		// ii. .testimonial-carousel
	
		
			var owl=$('.testimonial-carousel');
			owl.owlCarousel({
				items:3,
				margin:0,
				
				loop:true,
				autoplay:true,
				smartSpeed:1000,
				
				//nav:false,
				//navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
				
				dots:false,
				autoplayHoverPause:false,
			
				responsiveClass:true,
					responsive:{
						0:{
							items:1
						},
						640:{
							items:2
						},
						992:{
							items:3
						}
					}
				
				
			});

		// iii. .brand-item (carousel)
		
			$('.brand-item').owlCarousel({
				items:6,
				loop:true,
				smartSpeed: 1000,
				autoplay:true,
				dots:false,
				autoplayHoverPause:false,
				responsive:{
						0:{
							items:2
						},
						415:{
							items:2
						},
						600:{
							items:3
						},
						1000:{
							items:6
						}
					}
				});
				
				
				$('.play').on('click',function(){
					owl.trigger('play.owl.autoplay',[1000])
				})
				$('.stop').on('click',function(){
					owl.trigger('stop.owl.autoplay')
				})

				// IV. ...........
					const $lightbox = $('#lightbox');
					const $lightboxImage = $('#lightbox-image');
					let currentIndex = 0;
			
					// Open lightbox
					$('.blog-item').on('click', function () {
						currentIndex = parseInt($(this).data('index'));
						const imgSrc = $(this).find('img').attr('src');
						$lightboxImage.attr('src', imgSrc);
						$lightbox.removeClass('hidden');
					});
			
					// Close lightbox
					$('.lightbox-close').on('click', function () {
						$lightbox.addClass('hidden');
					});
			
					// Navigate to next image
					$('.lightbox-next').on('click', function () {
						currentIndex = (currentIndex + 1) % $('.blog-item').length;
						const nextImgSrc = $('.blog-item').eq(currentIndex).find('img').attr('src');
						$lightboxImage.attr('src', nextImgSrc);
					});
			
					// Navigate to previous image
					$('.lightbox-prev').on('click', function () {
						currentIndex = (currentIndex - 1 + $('.blog-item').length) % $('.blog-item').length;
						const prevImgSrc = $('.blog-item').eq(currentIndex).find('img').attr('src');
						$lightboxImage.attr('src', prevImgSrc);
					});
			
					// Close lightbox on background click
					$lightbox.on('click', function (e) {
						if ($(e.target).is('#lightbox')) {
							$lightbox.addClass('hidden');
						}
					});
				
					 // Toggle options dropdown
    $(".custom-select-box").on("click", function () {
		$("#select-lang").toggleClass("open");
	  });
  
	  // Handle language selection
	  $("#select-lang .option").on("click", function () {
		var selectedLang = $(this).text().trim(); // Get the language name
		var langValue = $(this).data("value"); // Get the language value
		var langTranslate = $(this).data("translate"); // Get the translate data
  
		// Update the displayed language
		$("#selected-lang").text(selectedLang);
  
		// Optional: Update the page translation or language settings
		changeLanguage(langValue);
  
		// Close the dropdown
		$("#select-lang").removeClass("open");
	  });
  
	  // Function to change language (customize as needed)
	  function changeLanguage(lang) {
		console.log("Language changed to:", lang);
		// Add your language change logic here, such as AJAX calls or DOM updates
	  }
  
	  // Close dropdown if clicked outside
	  $(document).on("click", function (e) {
		if (!$(e.target).closest(".custom-select").length) {
		  $("#select-lang").removeClass("open");
		}
	  });

});