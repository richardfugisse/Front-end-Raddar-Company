!function ($) {
	$(function(){
		var  URLpath = $('[name="baseUrl"]').val();
		var $window = $(window);
		var $body   = $(document.body);

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
	})
}(window.jQuery)