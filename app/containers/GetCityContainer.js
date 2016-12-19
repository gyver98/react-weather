var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');

var GetCityContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
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
    handleSubmitCity: function (e) {
        e.preventDefault();
        console.log(this.state.city);
        this.context.router.push('/forecast/' + this.state.city);
    },
    handleUpdateCity: function (e) {
        this.setState({
            city: e.target.value
        })
        //console.log("city : ", this.state.city);
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