var root = this;

root.GoogleMaps = root.GoogleMaps || {}

GoogleMaps.initialized = false;

GoogleMaps.callbacks = [];
GoogleMaps.callback = function() {
    for (key in GoogleMaps.callbacks) {
        GoogleMaps.callbacks[key](null);
    }
    GoogleMaps.callbacks = [];
}

GoogleMaps.init = function(parameters, callback) {
    if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
        if ('function' == typeof callback) {
            callback();
        }
        return;
    }

    if ('function' == typeof callback) {
        GoogleMaps.callbacks.push(callback);
    }
    if(GoogleMaps.initialized) {
        return;
    }
    GoogleMaps.initialized = true;

    var script, firstScript;
    script = document.createElement("script");
    script.type = "text/javascript";
    script.async = !0;
    script.src = ("https:" === document.location.protocol ? "https:" : "http:") + '//maps.googleapis.com/maps/api/js';
    
    parameters = parameters || {};
    if ('undefined' == typeof parameters['sensor']) {
        parameters['sensor'] = false;
    };
    parameters['callback'] = 'GoogleMaps.callback';

    var queryString = "?";
    for (key in parameters) {
        if (queryString != "?") {
            queryString += "&"
        }
        queryString += key + "=" + String(parameters[key]);
    }

    script.src += queryString;

    firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(script, firstScript);
};
