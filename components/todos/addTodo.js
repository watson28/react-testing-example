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
            <div>
                <input type="text" onChange={this.onChange} value={this.state.inputValue} />
                <button onClick={this.addTodo}>Add</button>
            </div>
        );
    },

    onChange: function (event) {
        this.setState({
            inputValue: event.target.value
        });
    },

    addTodo: function () {
        this.props.onAddItem(this.state.inputValue.trim());
    }
});

module.exports = AddTodo;