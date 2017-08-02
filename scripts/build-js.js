var browserify = require('browserify');
var fs = require('fs');

browserify(['components/main.js'], {
    debug: true,
    paths: ['./node_modules','.'],
    transform: [
        [ 'babelify', {presets: ["es2015", "react"]}]
    ]
}).bundle(function (err, buf) {
    fs.writeFile("build/app.js", buf, function(err) {
        if(err) {
            return console.error(err);
        }
    }); 
});