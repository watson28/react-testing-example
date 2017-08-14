var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');

var Water = createReactClass({

    propTypes: {
        initialTempeture: PropTypes.number
    },

    getInitialState: function () {
        return {
            tempeture: this.props.initialTempeture.toString()
        };
    },

    render: function () {
        return (
            <div>
                <input type="number" onChange={this.setTemperature} value={this.state.tempeture} />
                {this.renderMessage()}
            </div>
        );
    },

    renderMessage: function () {
        var message;

        if (this.isNumeric(this.state.tempeture)) {
            message = this.renderWaterMessage(parseInt(this.state.tempeture, 10));
        } else {
            message = this.renderIvalidTempetureMessage();
        }

        return message;
    },

    renderWaterMessage: function (tempeture) {
        var matterState = this.getMatterState(tempeture);

        return (
            <p className={matterState-'water'}>
                At {this.state.tempeture}°C, water is considered to be a "{matterState.toUpperCase()}" state of matter.
            </p>
        );
    },

    renderIvalidTempetureMessage: function () {
        return (
            <p>Invalid tempeture!!</p>
        );
    },

    setTemperature: function (e) {
        this.setState({
            tempeture: e.target.value,
        });
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
    },

    isNumeric: function (string) {
        return  string.length > 0 && !isNaN(string);
    }
});

module.exports = Water;