var React = require('react');
var createReactClass = require('create-react-class');

var Water = createReactClass({

    getInitialState: function () {
        return {
            tempeture: 18
        };
    },

    setTemperature: function (e) {
        this.setState({
            tempeture: parseInt(e.target.value, 10)
        });
    },

    render: function () {
        var matterState = this.getMatterState(this.state.tempeture);

        return (
            <div>
                <input type="text" onChange={this.setTemperature} value={this.state.tempeture} />
                <p className={matterState-'water'}>At {this.state.tempeture}°C, water is considered to be a "{matterState.toUpperCase()}" state of matter.</p>
            </div>
        );

    },

    getMatterState: function (tempeture) {
        var state;

        if (this.state.tempeture <= 0) {
            state = 'solid';
        } else if (this.state.tempeture >= 100) {
            state = 'gas';
        } else {
            state = 'liquid';
        }

        return state;
    }
});

module.exports = Water;