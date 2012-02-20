<?php

/*
 * Created on Jan 11, 2012
 *
 * To change the template for this generated file go to
 * Window - Preferences - PHPeclipse - PHP - Code Templates
 */
 
 /**
  * www.cse672.local api key: ABQIAAAAJlXI2Bwm7HpvuBgtX-0aFRSbQM0B4UX8RTsLtVmE0qu8H2Iz5BSGV26610HwIGID8Jm6TgMn4cpZKg
  */
  $key = 'AIzaSyAm0wm_XyujDGX4Dn83ss8JPKF0IOqPsJg';
 
?>
<!DOCTYPE html>
<html>
<head>
<title>Test GeoLocation</title>

<script src="http://code.jquery.com/jquery-1.7.1.min.js"></script> 
<script src="http://maps.google.com/maps?file=api&amp;v=2&amp;sensor=false&amp;key=<?php echo $key;?>" type="text/javascript"></script>

</head>

<body>

<h2>THE MAP</h2>
<div style="width:800px;height:600px;border:solid black 5px">
	<div id="container_map" style="width:100%;height:100%">Loading...</div>
</div>


<script>
var myGeo = {
	success : function(position){
		$('#container_map').html('Your position: ('+position.coords.latitude+', '+position.coords.longitude+')'+
			'<br/>Loading Map...');
		setTimeout(function(){
			myGeo.googleMap(position.coords.latitude,position.coords.longitude);
		},2000);
	},
	failure : function(error){
		switch(error.code)  
            {  
                case error.PERMISSION_DENIED: 
                $('#container_map').html("user did not share geolocation data");  
                break;  
  
                case error.POSITION_UNAVAILABLE: 
                $('#container_map').html("could not detect current position");  
                break;  
  
                case error.TIMEOUT: 
				$('#container_map').html("retrieving position timed out");  
                break;  
  
                default: 
                $('#container_map').html("unknown error");  
                break;  
            }
	},
	init : function(){
		if (navigator.geolocation) 
		{
			navigator.geolocation.getCurrentPosition(myGeo.success, myGeo.failure);
		} else {
			$('#container_map').html('Failed...No navigator.geolocation');
		}
		
	},
	googleMap : function(latitude,longitude){
		var mapCenter = new GLatLng(latitude,longitude);
		map = new GMap2(document.getElementById("container_map"));
		map.setCenter(mapCenter, 15);
		map.addOverlay(new GMarker(mapCenter));
	 
		// Start up a new reverse geocoder for addresses?
		geocoder = new GClientGeocoder();
		geocoder.getLocations(latitude+','+longitude, myGeo.googleMapError);
	},
	googleMapError : function(response){
		if (!response || response.Status.code != 200) {
			alert("Sorry, we were unable to geocode that address");
		} else {
			
		}
	}
};
myGeo.init();
</script>

</body>

</html>
