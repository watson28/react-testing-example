module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'browserify'],
        files: [
            'polyfill/**/*.js',
            'test/**/*.js'
        ],
        preprocessors: {
        'polyfill/**/*.js': [ 'browserify'],
        'test/**/*.js': [ 'browserify']
        },
        browsers: ['PhantomJS'],
        browserify: {
            paths: ['./node_modules','.'],
            transform: [
                [ 'babelify', {presets: ["es2015", "react"]}],
                ['rewireify']
            ]
        },
        singleRun: true
    });
};
