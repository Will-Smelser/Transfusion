<?php
/**
 * Turn off magic quotes.
 */
turnOffMagicQuotes();

/**
 * Required Files
 */
include 'constants.php';
include 'classLogin.php';
include 'classQuery.php';

/**
 * Shut off all errors
 */
error_reporting(0);

/**
 * Start the session
 */
session_start();

/**
 * Process the request.
 */
echo process($_GET['action']);


/**
 * Process the resquest
 * @param String $action action to process.  Expects: login, schema, update
 * @return String A JSON string
 *     Gurantees atleast the following response:
 *     {result:<boolean>}
 */
function process($action){
	switch($action){
		/**
		 * Switch case for determining which action to perform
		 * @param action $_GET variable.  Epects login, schema, update
		 */
		case 'login':
			return login($_POST['username'],$_POST['password']);
		case 'schema':
			return schema($_SESSION['token'], $_GET['tableID']);
		case 'update':
			return update($_SESSION['token'],$_POST['table'],$_POST['LineID']);
		default:
			return '{"result":false,"msg":"Unsupported request given."}';
	}
}

/**
 * Login a google account and get valid google session token
 * @param string $username Valid google username
 * @param string $password Password correspsond to valid google account
 * @return string A JSON string.
 *     success: {result:true,token:<valid google session token>}
 *     failure: {result:false}
 */
function login($username, $password){
	$token = Login::getAuthToken($username, $password);
	
	if($token && !preg_match('/error/i',$token)){
		$_SESSION['token'] = $token;
		$_COOKIE['login_token'] = $token;
	
		$temp = array('result'=>true,'token'=>$token);
		echo json_encode($temp);
	} else {
		echo "{\"result\":false}";
	}
}

/**
 * Get the fusion table schema
 * @param String $token Valid google session token
 * @param String $tableID Valid fusion table id
 * @return String A JSON string
 *     success: {result:true,schema:[<filed 1>,<field 2>,...]}
 *     failure: {result:false}
 */
function schema($token, $tableID){
	//GET THE SCHEMA
	$client = new Query($token);
	 
	$result = $client->doQuery("DESCRIBE {$tableID}");
	 
	if($result){ //&& !preg_match('/error/i',$result)){
		//have to parse https://developers.google.com/fusiontables/docs/developers_guide#tableLists
		$fields = array();
		$lines = explode("\n",$result);
		array_shift($lines);
		foreach($lines as $line){
			$parts = explode(',',$line);
			array_push($fields,$parts[1]);
		}
		return json_encode(array('result'=>true,'schema'=>$fields));
	}
	return "{\"result\":false}";
}

function update($token, $table, $lineID){
	//GET THE ROWID from fusion
	$client = new Query($token);
	$ROWID = 0;
	$result = $client->doQuery("SELECT ROWID FROM {$table} WHERE LineID=".$lineID);
	
	if($result && !preg_match('/error/i',$result)){
		$temp = explode("\n",$result);
		$ROWID = trim($temp[1]);
	} else {
		$temp = array("result"=>false,"code"=>"1",
				"tableID"=>$table,"LineID"=>$lineID);
		echo json_encode($temp);
		exit;
	}
	
	if(strlen($_POST['query']) == 0){
		$temp = array("result"=>false,"code"=>"2",
				"tableID"=>$table,"LineID"=>$lineID);
		echo json_encode($temp);
		exit;
	}
	
	$result = $client->doQuery('UPDATE '.$table.' SET '.$_POST['query'].' WHERE rowid=\''.$ROWID.'\'');
	
	if($result){ //&& !preg_match('/error/i',$result)){
		echo '{"result":true,"tableID":"'.$table.'","LineID":"'.$lineID.'"}';
	} else {
			
		preg_match('/error (?<code>\d+)/i',$result,$matches);
			
		$temp = array("result"=>false,"code"=>$matches['code'],
				"tableID"=>$table,"LineID"=>$lineID);
		echo json_encode($temp);
	}
}

/**
 * disable magic quotes
 * Some default installations of PHP will
 * enable magic quotes which can screw up
 * normal http communications
 */
function turnOffMagicQuotes(){
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
}
?>