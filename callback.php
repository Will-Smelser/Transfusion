<!DOCTYPE HTML>
<html>
<head>

<?php if (!$_GET['access_token']) : ?>

<script>
 
var query = location.href.split('#')[1].split('=');
query.shift();
query = query.join('=');

window.location.href = 'http://' + document.domain + window.location.pathname + "?access_token="+query;
 
</script>

<?php endif; ?>
 
<?php
$url = "https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".$_GET['access_token'];
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$output = curl_exec($ch);
curl_close($ch);

//store this in session on the server as well
$_SESSION['login'] = json_decode($output,true);
$_SESSION['login']['start'] = time();
?>


<title>OAuth Callback Parser</title>
<script>

//store the data in session
sessionStorage.login = JSON.stringify(<?php echo $output; ?>);
sessionStorage.loginExpire = <?php echo $_SESSION['login']['expires_in']+$_SESSION['login']['start']; ?>;

//forward back to main
document.location.href="main.html#loggedin";

</script>
</head>
<body>
<h2>If you are not forwarded...</h2>
<p>Click <a href="main.html">here</a>.</p>
</body>
</html>
