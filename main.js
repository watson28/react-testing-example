var React = require('react');
var createReactClass = require('create-react-class');
var Water = require('components/water');
var WaterSimple = require('components/water-simple');
var TodosList = require('components/todos/todoList');
var ReactDOM = require('react-dom');

var IndexPage = createReactClass({

    render: function () {
        return (
            <div className="container">
                {this.renderTodosComponent()}
                {this.renderWaterSimple()}
                {this.renderWaterComponent()}
            </div>
        );
    },

    renderTodosComponent: function () {
        var result;

        if (this.shouldRenderTodos()) {
            result = (
                <div className="jumbotron">
                    <h1>TodoList</h1>
                    <TodosList />
                </div>
            );
        }

        return result;
    },

    renderWaterSimple: function () {
        var result;

        if (this.shouldRenderWaterSimple()) {
            result = (
                <div className="jumbotron">
                    <h1>Simple Water</h1>
                    <WaterSimple initialTempeture={18} />
                </div>
            );
        }

        return result;
    },

    renderWaterComponent: function () {
        var result;

        if (this.shouldRenderWater()) {
            result = (
                <div className="jumbotron">
                    <h1>Complex Water</h1>
                    <Water initialTempeture={18} />
                </div>
            );
        }

        return result;
    },

    shouldRenderTodos: function () {
        var compQueryValue = this.getComponentQueryValue();
        return !compQueryValue || compQueryValue === 'todos';
    },

    shouldRenderWater: function () {
        var compQueryValue = this.getComponentQueryValue();
        return !compQueryValue || compQueryValue === 'water';
    },

    shouldRenderWaterSimple: function () {
        var compQueryValue = this.getComponentQueryValue();
        return !compQueryValue || compQueryValue === 'water-simple';
    },

    getComponentQueryValue: function () {
        var urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('component');
    }
});

ReactDOM.render(<IndexPage />, document.getElementById('app'));