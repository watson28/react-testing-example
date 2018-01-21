process.env.CHROME_BIN = require('puppeteer').executablePath();

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
        browsers: ['CustomHeadless'],
        browserify: {
            paths: ['./node_modules','.'],
            transform: [
                [ 'babelify', {presets: ["es2015", "react"]}],
                ['rewireify']
            ]
        },
        singleRun: true,

        // running headless chrome on a sandbox doesnt work.
        customLaunchers: {
            CustomHeadless: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox']
            }
        }
    });
};
