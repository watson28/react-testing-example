var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');

var TodoItem = createReactClass({

    propTypes: {
        description: PropTypes.string.isRequired
    },

    render: function () {
        return <li>{this.props.description}</li>;
    }
});

module.exports = TodoItem;