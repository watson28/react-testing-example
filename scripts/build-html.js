var HTMLDocument = require('react-html-document').default;
var ReactDOMServer = require('react-dom/server');
var fs = require('fs');
var React = require('react');

function getHtmlDocContent() {
    var document = React.createElement(
        HTMLDocument,
        {
            title: 'React Testing Example',
            scripts: ['app.js'],
            stylesheets: ['https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css']
        },
        React.createElement('div', null, 'My App')
    );

    return '<!DOCTYPE html>\n' + ReactDOMServer.renderToStaticMarkup(document);
}

function createBuildFolder() {
     fs.mkdirSync('build');
}

function buildHtmlDocPage() {
    fs.writeFile("build/index.html", getHtmlDocContent(), function(err) {
        if(err) {
            return console.error(err);
        }
    });
}

buildHtmlDocPage();