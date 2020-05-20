var app = {};
(function(){
	'use strict';
	var $window = $(window);
	var $document = $(document);
	var $body = $('body');
	var bodyWidth = window.innerWidth;
	
	/**
	 * Const
	 */
	
	var XS = 640;
	var SM = 768;
	var MD = 960;
	var LG = 1250;
	
	/**
	 * Header Lang Select
	 */
	
	setTimeout(function () {
		$('<div class="header__sel-lang-overlay"><div class="header__sel-lang-overlay__inner"></div></div>').appendTo('.main-block');
		
		$('.header__sel-lang select').styler({
			onSelectOpened: function () {
				var bodyWidth = window.innerWidth;
				if($(this).closest('.header__sel-lang').length > 0 && bodyWidth > XS) {
					$('.header__nav__logo').addClass('active');
					$('body').css('overflow', 'hidden');
					var $overlay = $('.header__sel-lang-overlay');
					$overlay.addClass('show');
					if($overlay.length > 0){
					} else {
						$('<div class="header__sel-lang-overlay"><div class="header__sel-lang-overlay__inner"></div></div>').appendTo('.main-block').addClass('show');
					}
	
				}
			},
			onSelectClosed: function(){
				$('.header__sel-lang-overlay').removeClass('show');
				$('.header__nav__logo').removeClass('active');
				$('body').css('overflow', '');
			}
		});
	}, 100);
	
	/**
	 * Select
	 */
	
	$('.popup-send').find('select').styler();
	
	/**
	 * Send questionnaire
	 */
	$('.js-send').click(function (event) {
		event.preventDefault();
		$('.popup-send').bPopup({
			onOpen: function() {
				setTimeout(function(){
					$('.popup-send').find('select').trigger('refresh');
					$('.popup-send .jq-selectbox ul').mCustomScrollbar({
						theme: 'minimal',
						scrollInertia: 300
					});
				}, 300);
			}
		});
	});
	
	/**
	 * Thnx
	 */
	
	//$('.popup-thnx').bPopup();
	
	/**
	 * Custom scroll
	 */
	
	$('.jq-selectbox ul').mCustomScrollbar({
		theme: 'dark',
		scrollInertia: 0
	});
	
	/**
	 * Footer
	 */
	
	(function () {
	
		var containerPadding = function () {
			var footer = document.querySelector('.footer') || '',
				height = footer.offsetHeight,
				container = document.getElementById('container');
	
			container.style.paddingBottom = height + 'px';
		};
	
		document.addEventListener("DOMContentLoaded", function(){
			setTimeout(function(){
				containerPadding();
			}, 3000);
		});
	
		window.addEventListener('resize', containerPadding, false);
	}());
	if (document.querySelector('body.index')) {
	
		/**
		 * Scroll to target
		 */
	
		(function () {
			function scrollToTarget($btn, callback) {
				$btn.click(function (event) {
					event.preventDefault();
					var id = $(this).data('target');
					var headerHeight = 0;
	
					if (window.scrollY === 0) {
						headerHeight = document.querySelector('.header__nav').clientHeight / 2;
					} else {
						headerHeight = document.querySelector('.header__nav').clientHeight;
					}
	
					var top = $("#" + id).offset().top - headerHeight;
	
					$('html, body').animate({
						scrollTop: top
					}, 1000);
	
					callback();
	
				})
	
			}
	
			var $menuItemNode = $('.header__nav__link');
	
			scrollToTarget($menuItemNode, function () {
				$('.header, .jsMobMenuBtn').removeClass('active');
			});
	
		}());
	
		/**
		 * Harmonic
		 */
		(function () {
			$('.section-13__harm__text').click(function (event) {
				event.preventDefault();
	
				var $this = $(this);
				var $item = $this.closest('.section-13__harm__i');
				var $siblings = $item.siblings('.section-13__harm__i');
				$item.toggleClass('active');
				$this.next('.section-13__harm__info').slideToggle('slow');
				$siblings.removeClass('active');
				$siblings.find('.section-13__harm__info').slideUp('slow');
			});
		}());
	
		/**
		 * Open-Close Mob Menu
		 */
		(function () {
			var active = false,
				$btn = $('.jsMobMenuBtn');
	
			var openMenu = function (_this) {
				var $this = $(_this);
				if (active) {
					$('.header').add($btn).removeClass('active');
					active = false;
				} else {
					$('.header').add($btn).show(function () {
						$(this).addClass('active');
					});
					active = true;
				}
			};
	
			var closeMenu = function () {
				$('.header').add($btn).removeClass('active');
				active = false;
			};
	
			$btn.click(function () {
				openMenu(this);
			});
	
			$body.click(function (event) {
				var $target = $(event.target),
					isBtn = $target.hasClass('jsMobMenuBtn'),
					isBtnChild = $target.parents().hasClass('jsMobMenuBtn'),
					isMenu = $target.hasClass('header'),
					isMenuChild = $target.parents().hasClass('header');
				if (!(isBtn || isBtnChild || isMenu || isMenuChild)) {
					closeMenu();
				}
			});
	
			$body.keydown(function (event) {
				if (event.which == 27) {
					closeMenu();
				}
			});
	
		}());
	
		/**
		 * Alternative to dropzone
		 */
		(function () {
			//function handleFileSelect(input) {
			//	var files = Array.prototype.slice.call(input.files);
			//	var output = document.querySelector(".input--file__preview");
			//
			//	if (input.files && input.files[0]) {
			//
			//		files.forEach(function (el, i) {
			//			if (i >= 5) {
			//				return;
			//			}
			//			var reader = new FileReader();
			//
			//			reader.addEventListener("load", function (event) {
			//				var picFile = event.target;
			//				var div = document.createElement("div");
			//				div.innerHTML = '<img class="thumbnail" src="' + picFile.result + '"/>';
			//				div.className = 'input--file__preview__item';
			//				output.insertBefore(div, null);
			//			});
			//
			//			reader.readAsDataURL(el);
			//		});
			//
			//	}
			//}
	
	//$("#photo-up").change(function () {
	//	handleFileSelect(this);
	//});
		}());
	
		/**
		 * Header Sticky
		 */
	
		(function () {
			var $headerNav = $('.header');
			$(document).scroll(function () {
				var bodyWidth = window.innerWidth;
				if (bodyWidth > XS) {
					if (pageYOffset > 0) {
						$headerNav.addClass('sticky');
					} else {
						$headerNav.removeClass('sticky');
					}
				} else {
					$headerNav.removeClass('sticky');
				}
			});
		}());
	
		/**
		 * Dropzone input in popup-send
		 */
	
		//(function () {
		//	var previewNode = document.querySelector(".input--file__preview");
		//	var previewTemplate = document.querySelector("#previewTemplate").innerHTML;
		//
		//	var zdrop = new Dropzone("#my-awesome-dropzone", {
		//		url: '/file-upload',
		//		maxFilesize: 5,
		//		thumbnailWidth: "250",
		//		thumbnailHeight: "250",
		//		previewTemplate: previewTemplate,
		//		autoQueue: false,
		//		previewsContainer: "#previews",
		//		clickable: "#zdrop"
		//	});
		//
		//
		//	//zdrop.on("sending", function(file, xhr, formData) {
		//	//	// Will send the filesize along with the file as POST data.
		//	//	formData.append("filesize", file.size);
		//	//	console.log(1);
		//	//});
		//
		//}());
	}
}(app));