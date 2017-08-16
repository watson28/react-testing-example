var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var envWeatherService = require('services/environmentWeather');

var Water = createReactClass({

    propTypes: {
        initialTempeture: PropTypes.number
    },

    getInitialState: function () {
        return {
            tempeture: this.props.initialTempeture.toString(),
            AtmosphericPressure: null,
            loading: true,
            error: null
        };
    },

    componentDidMount: function () {
        var self = this;

        self.setState({loading: true});
        envWeatherService.getAtmosphericPressure().then(function (pressure) {
            self.setState({
                loading: false,
                AtmosphericPressure: pressure
            });
        }).catch(function (error) {
            self.setState({
                loading: false,
                AtmosphericPressure: 760,
                error: error
            });
        });
    },

    render: function () {
        return this.state.loading ? this.renderLoading() : this.renderDefault();
    },

    renderLoading: function () {
        return <p>Loading!!...</p>
    },

    renderDefault: function () {
        return (
            <div>
                {this.renderAtmPressure()}
                <fieldset>
                    <input type="number" onChange={this.setTemperature} value={this.state.tempeture} />
                    {this.renderMessage()}
                </fieldset>
            </div>
        );
    },

    renderAtmPressure: function () {
        var result;
        
        if (this.state.error) {
            result = <small>There was an error getting the Atm pressure</small>
        } else {
            result = (
                <div>
                    <small>Atm pressure of current location (mm Hg): {this.state.AtmosphericPressure}</small><br/>
                    <small>Boiling point (°C): {this.getBoilingPoint().toFixed(2)}</small>
                </div>
            );
        }

        return result;
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
        var meltingPoint = this.getMeltingPoing();
        var boilingPoing = this.getBoilingPoint();
        var matterState = this.getMatterState(tempeture, meltingPoint, boilingPoing);

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

    getMatterState: function (tempeture, meltingPoint, boilingPoing) {
        var state;

        if (this.state.tempeture <= meltingPoint) {
            state = 'solid';
        } else if (this.state.tempeture >= boilingPoing) {
            state = 'gas';
        } else {
            state = 'liquid';
        }

        return state;
    },

    isNumeric: function (string) {
        return  string.length > 0 && !isNaN(string);
    },

    getBoilingPoint: function () {
        var SIDNEY_YOUNG_CONST = 0.00012;
        var deltaPressure = 760 - this.state.AtmosphericPressure;

        return (100 - 273.15*SIDNEY_YOUNG_CONST*deltaPressure)/(1 + SIDNEY_YOUNG_CONST*deltaPressure);
    },

    getMeltingPoing: function () {
        /*NOTE:
            Melting point does not change drastically as the boiling point.
            So we'll leave it as a constant.
        */
        return 0.0;
    }
});

module.exports = Water;