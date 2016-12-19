var axios = require('axios');

var BASEURL = 'http://api.openweathermap.org/data/2.5/';
var APIKEY = '908e1e83b536c6baafacb6c77fbb6d82';

function prepRouteParams (queryStringData) {
    return Object.keys(queryStringData)
        .map(function (key) {
            return key + '=' + encodeURIComponent(queryStringData[key]);
        }).join('&')
}

function prepUrl (type, queryStringData) {
    return BASEURL + type + '?' + prepRouteParams(queryStringData);
}

function getQueryStringData (city) {
    return {
        q: city,
        type: 'accurate',
        APPID: APIKEY,
        cnt: 5
    }
}

function getCurrentWeather (city) {
    var queryStringData = getQueryStringData(city);
    var url = prepUrl('weather', queryStringData);

    return axios.get(url)
        .then(function(currentWeatherData) {
            console.log('current weather info : ', currentWeatherData.data)
        });
}

function getForecastInfo (city) {
    var queryStringData = getQueryStringData(city);
    var url = prepUrl('forecast/daily', queryStringData)

    return axios.get(url)
        .then(function(forecastData) {
            console.log('5 day forecast : ', forecastData.data);
        });
}

module.exports = {
    getCurrentWeather: getCurrentWeather,
    getForecastInfo: getForecastInfo
};