const request = require('request');
const yargs = require('yargs');

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

const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)}`; // escapes and ready to inject to url

var lat = undefined;
var long = undefined;

request(
    url,
    {json: true}
,(err, res, body)=>{
    if(err) { 
        console.log('Unable to connect to google servers');
        return undefined;
    }
    if(body.status ==='ZERO_RESULTS') {
        console.log('Bad input. Unable to find ' + argv.address);
    } else if (body.status === 'OVER_QUERY_LIMIT') {
        console.log('----OVER_QUERY_LIMIT. Please try again after 10 seconds----')
            setTimeout(() => {
                console.log(`try again in now`);
            }, 10000)
    } 
    else if (body.status==='OK') {
        let formatted_address = body.results[0].formatted_address;
        let location = body.results[0].geometry.location;

        lat = location.lat;
        long = location.lng;
        console.log(`
        -->
        ${formatted_address}
        lattitude: ${location.lat}
        longditude: ${location.lng}
    `);
    }
});

// convert this into a promise

// const weatherAPIURL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a88410aa6db17393bd274acf261433df`

// request(
//     weatherAPIURL,
//     { json: true }
//     , (err, res, body) => {
//         console.log(`
//         -->
//         weather on: ${body.name}
//         ${body.weather}
//         `);
// });


// weather api key = &appid=a88410aa6db17393bd274acf261433df 

// have user input address (unformatted)
// output formatted_adress, lat and lng

