<?php

/*MAKE IT*/
$message = 	"From: ".$_POST['name']."\n".
			"Comment: ".$_POST['comment'];

$subject = "FROM BELLSANDHUNTERS.COM";

$email_to = "bellsandhunters@gmail.com";

$email_from = "BELLSANDHUNTERS.COM";

if($subject == null || $email_to == null || $email_from == null):
	echo "something went wrong";

/*HEAD IT*/
$headers = 'From: '.$email_from."\r\n".
 
'Reply-To: '.$email_from."\r\n" .
 
'X-Mailer: PHP/' . phpversion();

/*MAIL IT*/
@mail($email_to, $subject, $message, $headers);

?>
<HTML>
    <head>
        <!-- Piwik -->
        <script type="text/javascript">
        var _paq = _paq || [];
        _paq.push(["trackPageView"]);
        _paq.push(["enableLinkTracking"]);

        (function() {
            var u=(("https:" == document.location.protocol) ? "https" : "http") + "://stats.bellsandhunters.com/";
            _paq.push(["setTrackerUrl", u+"piwik.php"]);
            _paq.push(["setSiteId", "1"]);
            var d=document, g=d.createElement("script"), s=d.getElementsByTagName("script")[0]; g.type="text/javascript";
            g.defer=true; g.async=true; g.src=u+"piwik.js"; s.parentNode.insertBefore(g,s);
        })();
        </script>
        <link type="text/css" rel="stylesheet" href="main.css">
        <link href='http://fonts.googleapis.com/css?family=Economica:400,400italic,700|Open+Sans:400,800|Loved+by+the+King:400' rel='stylesheet' type='text/css'>
    </head>
    <body style="text-align:center">
        <img src="img/headbanner.png"/>
        <p>Thanks for your message!</p>
        <a href="http://www.bellsandhunters.com">Click here to return to our page!</a>
        <br>
        <br>
        <p>Or check us out on social media...</p>
    </body>
    <footer>
    	<div id="div_sociallinks">
			<a href="https://www.facebook.com/bellsandhunters" target="_blank"><img src="img/facebook.png" class="img_sociallinks"></a>
			<a href="https://twitter.com/bellsandhunters" target="_blank"><img src="img/twitter.png" class="img_sociallinks"></a>
			<a href="http://bellsandhunters.bandcamp.com/" target="_blank"><img src="img/bandcamp.png" class="img_sociallinks"></a>
			<a href="http://www.reverbnation.com/bellsandhunters" target="_blank"><img src="img/reverbnation.png" class="img_sociallinks"></a>
			<a href="http://instagram.com/bellsandhunters" target="_blank"><img src="img/instagram.png" class="img_sociallinks"></a>
			<a href="http://www.youtube.com/bellsandhunters" target="_blank"><img src="img/youtube.png" class="img_sociallinks"></a>
			<a href="https://www.soundcloud.com/bellsandhunters" target="_blank"><img src="img/soundcloud.png" class="img_sociallinks"></a>
		</div>
	</footer>
</HTML>