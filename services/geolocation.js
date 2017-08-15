module.exports = {
    getCurrentPosition: function () {
        return new Promise(function (resolve, reject) {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    resolve(position.coords);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject("Browser doesnt support geolocation API");
            }
        });
    }
};