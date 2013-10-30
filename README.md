# meteor-googlemaps

Google Maps repackaged for Meteor.

## How to install:
1. make sure you have [meteorite](https://github.com/oortcloud/meteorite) installed  
    `$ npm install -g googlemaps`
2. inside your project, run:  
    `$ mrt add googlemaps`

## In your Meteor project: 

This is not server code. You should only be working with GoogleMaps within your client files.

GoogleMaps has only one method, `init`.  That takes two arguments a list of loading parameters & a callback called when google maps is loaded.

```javascript
GoogleMaps.init(
	{
		'sensor': true, //optional
		'key': 'MY-GOOGLEMAPS-API-KEY', //optional
		'language': 'de' //optional
	}, 
	function(){
		var mapOptions = {
			zoom: 13,
			mapTypeId: google.maps.MapTypeId.SATELLITE
		};
		map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); 
		map.setCenter(new google.maps.LatLng( 35.363556, 138.730438 ));
	}
);
```

### Pull requests / issues
Please feel free to make pull requests and submit issues here. Thanks!