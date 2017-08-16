var API_WHEATER_URL = 'https://api.openweathermap.org/data/2.5/weather';
var API_KEY = 'e3312434e1167511132f2cdae8c29509';
var geolocationService = require('services/geolocation');

function fetchWeatherData(latitude, longitude) {
    var url = new URL(API_WHEATER_URL);
    var params = {
        lat: latitude,
        lon: longitude,
        appid: API_KEY
    };

    Object.keys(params).forEach(function (key) {
        url.searchParams.append(key, params[key]);
    });

    return fetch(url);
}

// convert from Pascal to mm Hg
function convertPressure(pascalPressure) {
    return pascalPressure * 0.00750061683;
}

module.exports = {
    getAtmosphericPressure: function () {
        return geolocationService.getCurrentPosition().then(function (coords) {
            return fetchWeatherData(coords.latitude, coords.longitude).then(function (response) {
                return response.json();
            }).then(function (data) {
                var hectoPascalPressure = data.main.pressure;
                return convertPressure(hectoPascalPressure * 100);
            })
        });

    }
};