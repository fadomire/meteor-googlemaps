Package.describe({
        summary: "google maps repackaged for Meteor"
});

Package.on_use(function (api, where) {
  api.add_files(['googlemaps.js'], ['client']);
});
