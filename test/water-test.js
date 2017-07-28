var Water = require('components/water');
var ReactTestUtils = require('react-dom/test-utils');
var React = require('react');

describe('Water component', function () {

    it('should render', function () {
        var result = ReactTestUtils.renderIntoDocument(<Water />);
        var inner = ReactTestUtils.scryRenderedDOMComponentsWithTag(result, 'div');

        console.log(inner[1]);
    });
});