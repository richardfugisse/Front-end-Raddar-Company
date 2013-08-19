$(document).ready(function(){
	if ( $.browser.msie ) {
		$('input[type="text"], textarea').each(function(){
			$placeholder = $(this).attr('placeholder');
			$(this).val($placeholder);
		});
	}
	$('.obrigatorio').each(function(){
		$val = $(this).val();
		$(this).attr('data-title',$val);
	});
	$(".validacao input[type='text'], input[type='password'], textarea").focus(function(){
		if($(this).val() == $(this).attr('data-title')){
			$(this).val('');
		}
	}).blur(function(){
		if($(this).val() == '' || $(this).val() == '(__) ____-____'){
			$(this).val($(this).attr('data-title'));
		}
	});
});
function validacao(){	
	$('[type="submit"]').click(function(){
		$parent = $(this);
		valida($parent);
		if(!$go) return false;
	});
	$('.alert-danger .close').click(function(){
		$(this).parent('.alert-danger').fadeOut(200);
	})
	$('form input, textarea, select').bind('change, blur',function(){
		if(typeof $error != 'undefined' && $error ){
			valida($parent);
		}
	});
}
function valida($parent){
	$message = "";
	$go = true;
	$('.obrigatorio').removeClass('alerta');
	$('select.obrigatorio').parent('.selector').removeClass('alerta');
	$parent.parents('form').find('.obrigatorio').each(function(){
		if($(this).val() == $(this).attr('data-title') || $(this).val() == "" ){
			$(this).addClass('alerta');
			$(this).parent('.selector').addClass('alerta');
			$message =  $message+"<br>• "+$(this).attr('rel');
			$go = false;
		}
		if($(this).hasClass('email') == true){
			validaEmail($(this).val(), $(this));
		}
	});
	if(!$go){
		$error = true;
		$parent.parents('form').find(".alert-danger .message").html($message);
		$parent.parents('form').find(".alert-danger").fadeIn();
		return false;
	}else{
		$message = "";
		$parent.parents('form').find('.alert-danger').fadeOut();
	}
}
function validaEmail($email, $emailAlert){
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if( !emailReg.test( $email )) {
		$emailAlert.addClass('alerta');
		$message = $message+"<br>• "+"E-mail inválido";
		$go = false;
	}
}