var React = require('react');
var createReactClass = require('create-react-class');
var AddTodo = require('./addTodo');
var TodoItem = require('./todoItem');

var TodoList = createReactClass({

    getInitialState: function () {
        return {
            todos: []
        };
    },

    render: function() {
        return (
            <div>
                <AddTodo onAddItem={this.addTodoItem} />
                <ul>
                    {this.state.todos.map(this.renderTodoItem)}
                </ul>
            </div>
        );
    },

    renderTodoItem: function (todoDescription, index) {
        return <TodoItem description={todoDescription} key={index} />
    },

    addTodoItem: function (newTodo) {
        this.setState({
            todos: this.state.todos.concat([newTodo])
        });
    }
});

module.exports = TodoList;