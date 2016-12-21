var React = require('react');
var Day = require('../components/Day');

var DayContainer = React.createClass({
    render: function () {
        console.log('state weather : ', this.props.location.state.weather)
        return <Day />
    }
});

module.exports = DayContainer;