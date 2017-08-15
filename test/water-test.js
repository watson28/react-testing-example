var expect = require('chai').expect;
var ReactTestUtils = require('react-dom/test-utils');
var React = require('react');
var Water = require('components/water');

describe('Water component', function () {
    var renderedComponent;
    var textElement;
    var mockProps = {
        initialTempeture: 18
    };

    describe('Default', function () {
        beforeEach(function () {
            var mockPromise = new Promise(function (resolve) {
                resolve(760);
            });
            Water.__set__({
                envWeatherService: {
                    getAtmosphericPressure: function () {
                        return mockPromise;
                    }
                }
            });

            renderedComponent = ReactTestUtils.renderIntoDocument(<Water {...mockProps} />);

            return mockPromise;
        });

        it('should render with initial state', function () {        
            textElement = ReactTestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'p');
            expect(textElement.innerHTML).to.include('LIQUID');
        });

        it('should be gas when tempeture is above 100 celcious degree', function () {
            var input = ReactTestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'input');
            input.value = '150';
            
            ReactTestUtils.Simulate.change(input);

            textElement = ReactTestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'p');
            expect(textElement.innerHTML).to.include('GAS');
        });

        it('should be solid when tempeture is above 0 celcious degree', function () {
            var input = ReactTestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'input');
            input.value = '-10';

            ReactTestUtils.Simulate.change(input); 

            textElement = ReactTestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'p');
            expect(textElement.innerHTML).to.include('SOLID');
        });
    });

    describe('Custom atmospheric pressure', function () {
        beforeEach(function () {
            var mockPromise = new Promise(function (resolve) {
                resolve(258.399); // atm pressure in everest
            });
            Water.__set__({
                envWeatherService: {
                    getAtmosphericPressure: function () {
                        return mockPromise;
                    }
                }
            });

            renderedComponent = ReactTestUtils.renderIntoDocument(<Water {...mockProps} />);

            return mockPromise;
        });

        it('should boil above 78°C in mount everest', function () {
            var input = ReactTestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'input');
            input.value = '79';
            
            ReactTestUtils.Simulate.change(input);

            textElement = ReactTestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'p');
            expect(textElement.innerHTML).to.include('GAS');
        });
    });
});