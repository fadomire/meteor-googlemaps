Package.describe({
	version: "0.1.1",
	name: "drewjw81:googlemaps",
	git: "https://github.com/drewjw81/meteor-googlemaps.git",
        summary: "Google maps repackaged for Meteor"
});

Package.on_use(function (api, where) {
  api.add_files(['googlemaps.js'], ['client']);
});
