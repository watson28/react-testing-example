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
                {this.state.todos.map(this.renderTodoItem)}
            </div>
        );
    },

    renderTodoItem: function (todoDescription) {
        return <TodoItem description={todoDescription} />
    },

    addTodoItem: function (newTodo) {
        this.setState({
            todos: todos.concat([newTodo])
        });
    }
});

module.exports = TodoList;