var React = require('react');
var utils = require('../utils/utils');
var DayItem = require('./DayItem');
var convertTemp = utils.convertTemp;

var styles = {
  descriptionContainer: {
    fontSize: 34,
    fontWeight: 100,
    textAlign: 'center',
    margin: '0 auto',
    maxWidth: 400
  }
}

function Day (props) {
   
    var city = props.city;
    var description = props.weather.weather[0].description;
    var minTemp = props.weather.temp.min;
    var maxTemp = props.weather.temp.max;
    var humidity = props.weather.humidity;

    return (
        <div style={styles.container}>
          <DayItem day={props.weather} />
          <div style={styles.descriptionContainer}>
            <p>{city}</p>
            <p>{description}</p>
            <p>min temp: {convertTemp(minTemp)} degrees</p>
            <p>max temp: {convertTemp(maxTemp)} degrees</p>
            <p>humidity: {humidity}</p>
          </div>
        </div>
    )
}
module.exports = Day;