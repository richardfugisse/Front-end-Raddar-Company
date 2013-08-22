!function ($) {
	$(function(){
		var  URLpath = $('[name="baseUrl"]').val();
		var $window = $(window);
		var $body   = $(document.body);
		// HEADER INSIDE
		if(!$('#index')[0]){
			$('#header').addClass('inside');
		}
		if($('.sliders')[0]){
			yepnope([{
				load: [
					URLpath+'js/plugins/royalslider/jquery.royalslider.min.js',
					URLpath+'css/plugins/royalslider/royalslider.css',
					URLpath+'css/plugins/royalslider/skins/minimal-white/rs-minimal-white.css'
				],
				complete: function () {
					$('.sliders').royalSlider({
						autoHeight: true,
						arrowsNav: false,
						fadeinLoadedSlide: true,
						imageScaleMode: 'none',
						controlNavigationSpacing: 0,
						controlNavigation: 'bullets',
						imageScaleMode: 'none',
						imageAlignCenter:false,
						loop: true,
						loopRewind: true,
						transitionType: 'fade',
						numImagesToPreload: 6,
						keyboardNavEnabled: true,
						usePreloader: false
					});
				}
			}]);
		}
		if(($('#gallery-1').length!=0)){
			yepnope([{
				load: [
					URLpath+'js/plugins/royalslider/jquery.royalslider.min.js',
					URLpath+'css/plugins/royalslider/royalslider.css',
					URLpath+'css/plugins/royalslider/skins/default/rs-default.css'
				],
				complete: function () {
					$('#gallery-1').royalSlider({
					    fullscreen: {
					      enabled: false,
					      nativeFS: true
					    },
					    controlNavigation: 'thumbnails',
					    autoScaleSlider: false, 
					    autoScaleSliderWidth: 940,     
					    autoScaleSliderHeight: 498,
					    loop: false,
					    imageScaleMode: 'none',
					    navigateByClick: true,
					    numImagesToPreload:2,
					    arrowsNav:true,
					    arrowsNavAutoHide: true,
					    arrowsNavHideOnTouch: true,
					    keyboardNavEnabled: true,
					    fadeinLoadedSlide: true,
					    globalCaption: true,
					    globalCaptionInside: false,
					    thumbs: {
					      appendSpan: true,
					      firstMargin: false,
					      spacing: 20,
					      drag: false,
					      autoCenter: false
					    }
					  });
				}
			}]);
		}
		// CENTRAL DO ALUNO
		if(($('#central-do-aluno').length!=0)){
			if( $('form select')[0] ){
				yepnope([{
					load:[
					URLpath+'js/libs/jquery.uniform.min.js'
					],
					complete: function () {
						$('form select').uniform();
					}
				}]);
			}
			if($('.downloads')[0]){
				$('.download').click(function(){
					$(this).parents('.item').find('.downloads').slideToggle();
				})
			}
		}

		//CONTATO
		if(($('#contato').length!=0)){
			yepnope([{
			  load: ['js/libs/jquery.uniform.min.js'],
			  complete: function () {
			    $('select').uniform();
			  }
			}]);
		}
		//SOME-THUMB-6
		if($('#some-thumb-6')[0]){
			 yepnope([{
		        load: [
		            URLpath+'css/plugins/easypaginate/easypaginate.css',
		            URLpath+'js/plugins/easypaginate/easypaginate.js',
		        ],complete: function(){
					$('#fotos').easyPaginate({
				        nextprev: false,
				        step:6,
				    });
				    $qnt = $('ul#fotos li').size();
				    $('.fotos-total').prepend($qnt);
				}
			}]);
			yepnope([{
		        load: [
		        URLpath+'css/plugins/fancybox/jquery.fancybox.css',
				URLpath+'css/plugins/fancybox/jquery.fancybox-buttons.css',
				URLpath+'css/plugins/fancybox/jquery.fancybox-thumbs.css',
				URLpath+'js/plugins/fancybox/jquery.fancybox.pack.js',
				URLpath+'js/plugins/fancybox/jquery.fancybox-buttons.js',
				URLpath+'js/plugins/fancybox/jquery.fancybox-media.js',
				URLpath+'js/plugins/fancybox/jquery.fancybox-thumbs.js',
				URLpath+'js/plugins/fancybox/jquery.mousewheel-3.0.6.pack.js'
		        ],
		        complete: function () {
		            $(".fancybox-thumb").fancybox({
						openEffect	: 'elastic',
						closeEffect	: 'elastic',
						prevEffect	: 'elastic',
						nextEffect	: 'elastic',        
						helpers	: {
							title	: {
								type: 'outside'
							},
							thumbs	: {
								width	: 50,
								height	: 50
							}
						},
						tpl: {
							wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
							image    : '<img class="fancybox-image" src="{href}" alt="" />',
							iframe   : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0"' + ($.browser.msie ? ' allowtransparency="true"' : '') + '></iframe>',
							error    : '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
							closeBtn : '<a title="Fechar" class="fancybox-item fancybox-close" href="javascript:;"></a>',
							next     : '<a title="PrÃ³xima" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
							prev     : '<a title="Anterior" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
						}
					});
		        }
		    }]);
		}
		if(($('.validacao').length!=0)){
		    yepnope([{
		        load:[
		            URLpath+'js/libs/validacao.js'
		        ],
		        complete: function () {
		            validacao();
		            console.log(1);
		        }
		    }]);
		}
		//FACEBOOK LIKE
		(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/pt_BR/all.js#xfbml=1";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
		//PLUS BUTTON
		 (function() {
		    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
		    po.src = 'https://apis.google.com/js/plusone.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
		  })();
	});

	
	
}(window.jQuery)