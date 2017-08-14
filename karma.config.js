module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'browserify'],
        files: ['test/**/*.js'],
        preprocessors: {
        'test/**/*.js': [ 'browserify']
        },
        browsers: ['PhantomJS'],
        browserify: {
            debug: true,
            paths: ['./node_modules','.'],
            transform: [
                [ 'babelify', {presets: ["es2015", "react"]}]
            ]
        },
        singleRun: true
    });
};
