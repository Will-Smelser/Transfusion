<?php
class Login {
  public static function getAuthToken($username, $password) {
    $clientlogin_curl = curl_init();
    curl_setopt($clientlogin_curl,CURLOPT_URL,'https://www.google.com/accounts/ClientLogin');
    curl_setopt($clientlogin_curl, CURLOPT_POST, true); 
    curl_setopt ($clientlogin_curl, CURLOPT_POSTFIELDS,
            "Email=".$username."&Passwd=".$password."&service=fusiontables&accountType=GOOGLE");
    curl_setopt($clientlogin_curl,CURLOPT_CONNECTTIMEOUT,2);
    curl_setopt($clientlogin_curl,CURLOPT_RETURNTRANSFER,1);
    $token = curl_exec($clientlogin_curl);	
    curl_close($clientlogin_curl);
    $token_array = explode("=", $token);        //bail    if(!isset($token_array[3])) return false;    
    $token = str_replace("\n", "", $token_array[3]);	
	return $token;
  }
}
?>