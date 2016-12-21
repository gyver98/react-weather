var React = require('react');
var Day = require('../components/Day');

var DayContainer = React.createClass({
    render: function () {
        //debugger;
        console.log('state weather : ', this.props.location.state.weather)
        return <Day city={this.props.routeParams.city} weather={this.props.location.state.weather}/>
    }
});

module.exports = DayContainer;