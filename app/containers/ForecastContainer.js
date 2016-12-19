var React = require('react');
var Forecast = require('../components/Forecast');
var weatherHelper = require('../utils/weatherHelper');

var ForecastContainer = React.createClass({
    getInitialState: function () {
        return {
            isLoading: true,
            forecasts: {}
        }
    },
    componentDidMount: function () {
        //debugger;
        this.makeRequest(this.props.routeParams.city);
        
    },
    componentWillReceiveProps: function (nextProps) {
        //debugger;
        this.makeRequest(nextProps.routeParams.city);
    },
    makeRequest: function (city) {
        weatherHelper.getForecastInfo(city)
            .then(function (forecasts) {
                this.setState({
                    forecasts: forecasts,
                    isLoading: false
                })
            }.bind(this))
    },
    render: function () {
        return <Forecast 
            isLoading={this.state.isLoading}
            forecasts={this.state.forecasts} />
    }
});

module.exports = ForecastContainer;