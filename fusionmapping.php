<?php
/*
 * Created on Jan 22, 2012
 *
 * To change the template for this generated file go to
 * Window - Preferences - PHPeclipse - PHP - Code Templates
 */
 
 /**
  * www.cse672.local api key: ABQIAAAAJlXI2Bwm7HpvuBgtX-0aFRSbQM0B4UX8RTsLtVmE0qu8H2Iz5BSGV26610HwIGID8Jm6TgMn4cpZKg
  */
  $key = 'ABQIAAAAJlXI2Bwm7HpvuBgtX-0aFRSbQM0B4UX8RTsLtVmE0qu8H2Iz5BSGV26610HwIGID8Jm6TgMn4cpZKg';
 
?>
<!DOCTYPE html>
<html>
<head>
<title>Test GeoLocation</title>

<script src="http://code.jquery.com/jquery-1.7.1.min.js"></script> 
<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js"></script>

<!--
<script src="http://maps.google.com/maps?file=api&amp;v=3&amp;sensor=false&amp;key=<?php echo $key;?>" type="text/javascript"></script>
//-->
</head>

<style>
body{font-family:arial;}
</style>

<body>

<h2>THE MAP</h2>
<div style="width:800px;height:600px;border:solid black 5px">
	<div id="map_canvas" style="width:100%;height:100%">Loading...</div>
</div>
<div id="key" style="position:absolute;top:100px;left:100px;width:250px;height:400px;opacity:.7;background-color:#000">

	<div id="title" style="cursor:move;height:50;font-size:16px;font-weight:bold;color:#333;background-color:#999;padding:5px;">Map Data</div>
	<div style="height:350px;width:auto;overflow:auto;color:#FFF;font-size:12px;padding:5px;" id="key-data">

	</div>
</div>

<script>
$(document).ready(function(){
	var city = new google.maps.LatLng(42.8576698303223,-106.267807006836);
	//var city = new google.maps.LatLng(-25, 133);
	
	map = new google.maps.Map(document.getElementById('map_canvas'), {
	  center: city,
	  zoom: 15,
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  zoomControlOptions: {style: google.maps.ZoomControlStyle.SMALL},
	  streetViewControl: false
	});
	
	layer = new google.maps.FusionTablesLayer({
	  query: {
	    select: 'geometry',
	    from: '2088364'
	  },
	  suppressInfoWindows: true,
	  styles: [{
	    polygonOptions: {
	      fillColor: "#00FF00",
	      fillOpacity: 0.3
	    }
	  }]
	});
	layer.setMap(map);
	
	
	
	google.maps.event.addListener(layer, 'click', function(e) {
		//alert(e.row['Distance'].value);
		$('#key-data').html('');
		for(var data in e.row){
			var str = data + ': ' + e.row[data].value + '<br/>';
			$('#key-data').append(str);
		}
	});
	
	$('#key').draggable({handle:'#title'});
	
});
</script>

</body>
</html>