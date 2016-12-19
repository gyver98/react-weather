var axios = require('axios');

var APPID = "908e1e83b536c6baafacb6c77fbb6d82";

function getWeatherInfo (cityname) {
    return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityname + '&type=accurate&APPID='+ APPID);
}

function getForecastInfo (cityname) {
    return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + cityname + '&type=accurate&APPID='+ APPID + '&cnt=5');
}

var helpers = {
    getCurrentWeather: function (cityname) {
      //debugger;
      return getWeatherInfo (cityname)
        .then(function(info) {
            return info;
        })
        .catch(function (err) {
            console.warn('Error in getWeatherInfo: ', err);
        })
    },
    getFiveDayForecast: function (cityname) {
      //debugger;
      return getForecastInfo (cityname)
        .then(function(info) {
            return info;
        })
        .catch(function (err) {
            console.warn('Error in getForecastInfo: ', err);
        })
    }
};

module.exports = helpers;