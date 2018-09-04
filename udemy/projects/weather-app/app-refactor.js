const yargs = require('yargs');
const axios = require('axios');
const argv = yargs.
    options({
        address: {
            demand: true,
            alias: 'a',
            describe: 'Input location address for weather',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)}`; // escapes and ready to inject to url
// const weatherAPIURL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a88410aa6db17393bd274acf261433df`;
axios.get(url)
    .then(function (response) {
        if (response.data.status === 'OVER_QUERY_LIMIT') {
            console.log('----OVER_QUERY_LIMIT. Please try again after 10 seconds----');
            setTimeout(() => {
                console.log('Try again now');
            }, 10000)
        }
        else if (response.data.status === 'OK') {
            let formatted_address = response.data.results[0].formatted_address;
            let location = response.data.results[0].geometry.location;
            console.log({
                formatted_address,
                lat: location.lat,
                lng: location.lng,
            })
            return axios.get(`https://api.darksky.net/forecast/d5a7656d1dc7d62931a6ac1e8201b03e/${location.lat},${location.lng}`)
        }
    })
    .then((results)=>{
            console.log(`
            temperature is at ${results.data.currently.temperature}
            but it feels like ${results.data.currently.apparentTemperature}
            expect ${results.data.currently.summary}
            `)
    })
    .catch(function (error) {
        if (error.status === 'ZERO_RESULTS') {
            console.log('Bad input. Unable to find ' + address);
        } else {
            console.log(error)
        }
    })
    // .then((response)=>{

    // });