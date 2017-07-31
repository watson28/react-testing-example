var expect = require('chai').expect;
var ReactTestUtils = require('react-dom/test-utils');
var React = require('react');
var Water = require('components/water');

describe('Water component', function () {

    var renderedComponent;
    var textElement;

    beforeEach(function () {
        renderedComponent = ReactTestUtils.renderIntoDocument(<Water />);
        textElement = ReactTestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'p');
    });

    it('should render with initial state', function () {
        expect(textElement.innerHTML).to.include('LIQUID');
    });

    it('should be gas when tempeture is above 100 celcious degree', function () {
        var input = ReactTestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'input');
        input.value = '150';
        ReactTestUtils.Simulate.change(input);

        expect(textElement.innerHTML).to.include('GAS');
    });

    it('should be solid when tempeture is above 0 celcious degree', function () {
        var input = ReactTestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'input');
        input.value = '-10';
        ReactTestUtils.Simulate.change(input);

        expect(textElement.innerHTML).to.include('SOLID');
    });
});