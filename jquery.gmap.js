/*
 * Google Maps API Version 3 jQuery Plugin
 * 
 * Editor Poundhound
 *
 * 利用方法は当ブログをご覧ください。
 * 
 * http://www.nk0206.com/life/
 * 
 * permalink
 * http://www.nk0206.com/life/2010/02/google-maps-api-jquery-plugin.html
 *
 */


(function($) {
	$.fn.gmap = function(options) {
		
		var o = $.extend({
			centerLat: 35.660734,
			centerLng: 139.745307,
			zoom: 16,
			navCtr: true,
			mapTypeCtr: true,
			mapTypeCtrOp: { style: google.maps.MapTypeControlStyle.DROPDOWN_MENU },
			scaleCtr: false,
			mapType: google.maps.MapTypeId.ROADMAP, //SATELLITE,HYBRID,TERRAIN
			mkImg: '',
			popup: '<p>Default</p>',
			popupState: false
		}, options);
	
		this.each(function() {
			
			var centerlatlng = new google.maps.LatLng(o.centerLat, o.centerLng);
			
			var myOptions = {
				zoom: o.zoom,
				center: centerlatlng,
				navigationControl: o.navCtr,
				mapTypeControl: o.mapTypeCtr,
				mapTypeControlOptions: o.mapTypeCtrOp,
				scaleControl: o.scaleCtr,
				mapTypeId: o.mapType
			};
			
			//map
			var map = new google.maps.Map($(this).get(0), myOptions);
						
			//marker
			var marker = new google.maps.Marker({
   				position: centerlatlng,
				map: map, 
				icon: o.mkImg
			});
			
			//infoWindow
			var infowindow = new google.maps.InfoWindow({
				content: o.popup
			});
			if(o.popupState == true) {
				infowindow.open(map, marker);
			}
			
			//clickEvent
			google.maps.event.addDomListener(marker, 'click', function() {
				infowindow.open(map,marker);
			});
		});
		return this;
	};
})(jQuery);
