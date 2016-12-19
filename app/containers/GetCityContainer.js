var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');
var weatherHelper = require('../utils/weatherHelper');

var GetCityContainer = React.createClass({
    getDefaultProps: function () {
        return {
            direction: 'column'
        }
    },
    propTypes: {
        direction: PropTypes.string
    },
    getInitialState: function () {
        return {
            city: ''
        }
    },
    componentDidMount: function () {
        
    },
    handleSubmitCity: function () {
        console.log(this.state.city);
        // Fetch info from openweather then update state
        //weatherHelper.getCurrentWeather(this.state.city);
        weatherHelper.getForecastInfo(this.state.city);
    },
    handleUpdateCity: function (e) {
        this.setState({
            city: e.target.value
        })
        console.log("city : ", this.state.city);
    },
    render: function () {
        return (
            <GetCity 
              direction={this.props.direction}
              onSubmitCity={this.handleSubmitCity}
              onUpdateCity={this.handleUpdateCity}
              city={this.state.city}/>
        )
    }
});

module.exports = GetCityContainer;