<?php 
	function baseUrl($base){
		return "/CEEN/".$base;
	}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
	<!-- SEO -->
	<title>Título do Projeto</title>
	<meta name="description" content="">
	<meta name="author" content="Raddar Online">
	<meta name="keywords" content="">
	<meta name="language" content="pt-BR">
	<meta http-equiv="Content-Language" content="PT-BR">
	<meta name="revisit-after" content="1 days">
	<meta name="document-classification" content="Internet Services">
	<meta name="document-rights" content="Public">
	<meta name="document-rating" content="General">
	<meta name="document-state" content="Dynamic">
	<meta name="Page-Topic" content="Assunto principal da página">
	<meta name="robots" content="INDEX, FOLLOW">
	<meta http-equiv="cleartype" content="on">

	<!--CSS-->
	<link rel="shortcut icon" href="favicon.ico">
	<link rel="stylesheet/less" type="text/css" href="less/bootstrap.less"/>
	<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
	  <script src="js/html5shiv.js"></script>
	  <script src="js/respond.min.js"></script>
	  <script src="js/libs/selectivizr-min.js"></script>
	<![endif]-->

	<!-- MAIN JS -->
	<script src="js/libs/less.js"></script>
	<!-- Favicons -->
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="ico/apple-touch-icon-144-precomposed.png">
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="ico/apple-touch-icon-114-precomposed.png">
 	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="ico/apple-touch-icon-72-precomposed.png">
	<link rel="apple-touch-icon-precomposed" href="ico/apple-touch-icon-57-precomposed.png">
	<link rel="shortcut icon" href="ico/favicon.png">

</head>

<body>
	<input type="hidden" name="baseUrl" value="<?= baseUrl(''); ?>">
	<!--[if lt IE 7]>
	<p class="browser-support">
		Infelizmente, este site não vai funcionar com o seu navegador. Por favor, atualize para um navegador moderno:<br>
		<a href="http://www.google.com/chrome" target="_blank">Google Chrome</a>
		<a href="http://www.mozilla.org/firefox" target="_blank">Firefox</a>
		<a href="http://www.microsoft.com/windows/internet-explorer/" target="_blank">Internet Explorer 9</a>
	</p>
	<![endif]--> 
	<!-- <header class="main">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<img src="holder.js/200x200">
				</div>
			</div>
		</div>
	</header> -->