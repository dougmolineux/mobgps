<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.0//EN" "http://www.wapforum.org/DTD/xhtml-mobile10.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>mobgps</title>
<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
<script src="jquery.mobgps-0.2.js" type="text/javascript"></script>
<script>
	$(document).ready(function() {
		$("#message").mobgps({
			timer: 1000,
			showMap: true
		});
	});
</script>
</head>
<body>
<div id="message">Getting Location...</div>
</body>
</html>