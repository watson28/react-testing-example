module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'browserify'],
        files: ['test/**/*.js'],
        preprocessors: {
        'test/**/*.js': [ 'browserify']
        },
        browsers: ['Chrome'],
        browserify: {
            debug: true
        },
        singleRun: true
    });
};
