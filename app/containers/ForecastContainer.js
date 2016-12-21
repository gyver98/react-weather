var React = require('react');
var Forecast = require('../components/Forecast');
var weatherHelper = require('../utils/weatherHelper');

var ForecastContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
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
    handleClick: function (weather) {
        console.log("weather : ", weather);
        this.context.router.push({
            pathname: '/detail/' + this.props.routeParams.city,
            state: {
                weather: weather
            }
        });
    },
    render: function () {
        return <Forecast
            city={this.props.routeParams.city} 
            isLoading={this.state.isLoading}
            handleClick={this.handleClick}
            forecasts={this.state.forecasts} />
    }
});

module.exports = ForecastContainer;