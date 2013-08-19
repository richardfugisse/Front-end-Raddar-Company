<?php
if(isset($_REQUEST['metodo'])) $dir = "include/".$_REQUEST['metodo'].".php";
else $dir = "include/home.php";
include ("include/header.php");
include ($dir);
include ("include/footer.php");
?>
