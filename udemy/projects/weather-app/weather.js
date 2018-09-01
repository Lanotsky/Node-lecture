const request = require('request');

const getWeather = (location, callback) => {
    const lat = location.lat;
    const lng = location.lng;
    // const weatherAPI = `http://api.openweathermap.org/data/2.5/weather?q=${address}&appid=a88410aa6db17393bd274acf261433df`
    const weatherAPIURL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a88410aa6db17393bd274acf261433df`;

    request.get(weatherAPIURL,(err, res, body)=>{
        if(err) {
            callback('error fetching weather data');
            return false;
        }
       callback(undefined, res);
       callback(undefined, body);
    })

}
// 14.5585549,121.1360819
const getCurrenetWeather = (location, callback)=> {
    const lat = location.lat;
    const lng = location.lng;
    request(`https://api.darksky.net/forecast/d5a7656d1dc7d62931a6ac1e8201b03e/${lat},${lng}`,
        {json: true},
        (err, res, body)=>{
            if(!err & res.statusCode===200) {
                callback(undefined, body);
            } else {
                callback(err);
            }
    })
}



// https://api.darksky.net/forecast/[key]/[latitude],[longitude]

module.exports = {
    getCurrenetWeather,
}

// api key d5a7656d1dc7d62931a6ac1e8201b03e
