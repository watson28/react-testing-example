var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');

var AddTodo = createReactClass({

    propTypes: {
        onAddItem: PropTypes.func.isRequired
    },

    getInitialState: function () {
        return {inputValue: ''};
    },

    render: function () {
        return (
            <form onSubmit={this.addTodo}>
                <input type="text" onChange={this.onChange} value={this.state.inputValue} />
                <button type="submit">Add</button>
            </form>
        );
    },

    onChange: function (event) {
        this.setState({inputValue: event.target.value});
    },

    addTodo: function (e) {
        var inputValue = this.state.inputValue;

        if (inputValue) {
            this.props.onAddItem(inputValue.trim());
            this.setState({inputValue: ''});
        }
        e.preventDefault();
    }
});

module.exports = AddTodo;