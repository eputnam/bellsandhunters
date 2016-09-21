<?php

/*MAKE IT*/
$message = 	"From: ".$_POST['name']."\n".
			"Comment: ".$_POST['comment'];

$subject = "FROM BELLSANDHUNTERS.COM";

$email_to = "bellsandhunters@gmail.com";

$email_from = "BELLSANDHUNTERS.COM";

/*HEAD IT*/
$headers = 'From: '.$email_from."\r\n".
 
'Reply-To: '.$email_from."\r\n" .
 
'X-Mailer: PHP/' . phpversion();

/*MAIL IT*/
@mail($email_to, $subject, $message, $headers);

?>

Thanks for your message!