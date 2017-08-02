var React = require('react');
var createReactClass = require('create-react-class');
var Water = require('./water');
var TodosList = require('./todos/todoList');
var ReactDOM = require('react-dom');

var IndexPage = createReactClass({

    render: function () {
        return (
            <div>
                <TodosList />
                <Water />
            </div>
        );
    }
});

ReactDOM.render(<IndexPage />, document.getElementById('app'));