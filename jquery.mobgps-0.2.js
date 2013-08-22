(function($){
	$.fn.mobgps = function(options) {
	
		var defaults = {
			timer: 3000,
			showMap: true
		}; 
		var options = $.extend(defaults, options);
		var location;
		
		function insertMeta() {
			var metaStr = '<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport"/>';
			$('head').prepend(metaStr);
		}		
		
		function setLocation() {
			navigator.geolocation.getCurrentPosition(cb);
		}
		
		function cb(d) {
			location = d;
		}		
				
		function displayLocation(element) {
			var content = "";
			if(options.showMap)
				content += "<img src='http://maps.google.com/maps/api/staticmap?center=" + location.coords.latitude + "," + location.coords.longitude + "&zoom=14&size=256x256&maptype=roadmap&sensor=false&markers=color:blue%7Clabel:ABC%7C" + location.coords.latitude + "," + location.coords.longitude + "' />";
			content += "<p>Longitude: " + location.coords.longitude + "</p>";
			content += "<p>Accuracy: " + location.coords.accuracy + "</p>";
			content += "<p>Latitude: " + location.coords.latitude + "</p>"; 
			$(element).html(content);
		}
		
		return this.each(function() {
			var container = $(this);
			insertMeta();
			var t = setInterval(function() {
				setLocation();
				if(location)
					displayLocation(container);
			}, options.timer);
						
		}); 
	};
})(jQuery);
