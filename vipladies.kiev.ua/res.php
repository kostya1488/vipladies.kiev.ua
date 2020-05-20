<?php

$name = trim($_POST['name']);
$age = trim($_POST['age']);
$weight = trim($_POST['weight']);
$opyt = trim($_POST['experience']);
$english = trim($_POST['english']);
$skype = trim($_POST['skype']);
$viber = trim($_POST['viber']);
$whatsup = trim($_POST['whatsup']);
$country_from = trim($_POST['country_from']);
$email = trim($_POST['email']);
$number = trim($_POST['number']);

$recepient = "richladyinkyiv@gmail.com";
$pagetitle = "Новая заявка с сайта ";

$message = "Имя: ".$name."\r\n";
$message .= "Возраст: ".$age."\r\n";
$message .= "Вес: ".$weight."\r\n";
$message .= "Опыт работы есть?: ".$opyt."\r\n";
$message .= "Владение английским: ".$english."\r\n";
$message .= "Скайп: ".$skype."\r\n";
$message .= "Вайбер: ".$viber."\r\n";
$message .= "Ватсап: ".$whatsup."\r\n";
$message .= "Страна: ".$country_from."\r\n";
$message .= "Почта: ".$email."\r\n";
$message .= "Телефон: ".$number;




mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

echo "Ваша анкета успешно отправлена.<br> В ближайшее время мы с Вами свяжемся.";


?>
