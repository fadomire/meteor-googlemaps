Package.describe({
        summary: "google maps repackaged for Meteor"
});

Package.on_use(function (api) {
	if(api.export) {
	    api.export('googlemaps');
  	}
    api.add_files([
            'googlemaps.js'
    ],'client');
});