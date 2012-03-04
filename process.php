<?php
//disable magic quotes
if (get_magic_quotes_gpc()) {
    $process = array(&$_GET, &$_POST, &$_COOKIE, &$_REQUEST);
    while (list($key, $val) = each($process)) {
        foreach ($val as $k => $v) {
            unset($process[$key][$k]);
            if (is_array($v)) {
                $process[$key][stripslashes($k)] = $v;
                $process[] = &$process[$key][stripslashes($k)];
            } else {
                $process[$key][stripslashes($k)] = stripslashes($v);
            }
        }
    }
    unset($process);
}

include 'constants.php';
include 'classLogin.php';
include 'classQuery.php';


switch($_GET["action"]){
    case 'login':
         session_start();
         $username = $_POST['username'];
         $password = $_POST['password'];
         $_SESSION['token'] = Login::getAuthToken($username, $password);
		echo ($_SESSION['token']) ? "{result:true}" : "{result:false}";
    break;
    case 'update':
        session_start();		/*
        //$client = new Query($_SESSION['token']); 
		$client = new Query($_SESSION['login']['token']); 
		//$token = $token = Login::getAuthToken('username', 'password');
		//$client = new Query($token);
		var_dump($_SESSION['login']);
		//first we need to unique ROWID
		$ROWID = 0;
		$result = $client->doQuery("SELECT ROWID FROM {$_POST['table']} WHERE LineID=".$_POST['LineID']);
		var_dump($result);
		if($result && !preg_match('/error/i',$result)){
			$temp = explode("\n",$result);
			$ROWID = trim($temp[1]);
		}
		
        $result = $client->doQuery($_POST['query'].' WHERE rowid=\''.$ROWID.'\'');
		var_dump($result);
        echo ($result && !preg_match('/error/i',$result)) ? "{result:true}" : "{result:false}";		*/				
		
		//GET THE ROWID from fusion
		$client = new Query($_SESSION['token']);
		$ROWID = 0;
		$result = $client->doQuery("SELECT ROWID FROM {$_POST['table']} WHERE LineID=".$_POST['LineID']);
		
		if($result && !preg_match('/error/i',$result)){
			$temp = explode("\n",$result);
			$ROWID = trim($temp[1]);
		} else {
			echo "{result:false}";
			exit;
		}						
		
		//USE OAUTH TO AUTHENTICATE TOKEN AND PERFORM UPDATE QUERY
		include('OAuthClient.php');
		$oauth_token = $_SESSION['login']['token'];
		$verifier = $_SESSION['login']['oauth_verifier'];
		$secret = 'LTkc0k990bNH_nvSYTNEQO7v';
		$key    = '988409399403.apps.googleusercontent.com';
		
		OAuthClient::authorize($key,
			$secret,
			$oauth_token,
			$verifier/*,
			"MySQL",
			$user_id,
			$extra_options*/);
		
		$oauthClient = new FTOAuthClient($key,
			$secret/*,
			"MySQL",
			$user_id,
			$extra_options*/);

		echo $oauthClient->query($_POST['query'].' WHERE rowid=\''.$ROWID.'\'');

    break;
}
?>