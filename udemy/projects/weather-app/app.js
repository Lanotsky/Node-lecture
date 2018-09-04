const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode');
const weather = require('./weather');
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

// or you can just use axios...

const promise = new Promise((resolve,reject)=>{
    geocode.geocodeAddress(argv.a, (err, result) => {
        if(err){
            reject(err);
        }else{ 
            resolve(result); 
            console.log(JSON.stringify(result, undefined, 2));
            console.log(`
            Checking weather for: ${result.formatted_address}
            `)
        }
    });

}).then((resolve)=>{
    weather.getCurrenetWeather(resolve, (err, body) => {
        console.log(`
            temperature is at ${body.currently.temperature}
            but it feels like ${body.currently.apparentTemperature}
            expect ${body.currently.summary}
            `)
            
    })
},(reject)=>{
    console.log(reject)
    }).catch((reject)=>{
        consolel.log(reject);
});


