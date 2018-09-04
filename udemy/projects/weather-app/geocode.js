const request = require('axios');

const geocodeAddress = (address, callback)=>{
    var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`; // escapes and ready to inject to url
    request(
        url,
        { json: true }
        , (err, res, body) => {
            if (err) {
                callback('Unable to connect to google servers');
            }
            if (body.status === 'ZERO_RESULTS') {
                callback('Bad input. Unable to find ' + address);
            } else if (body.status === 'OVER_QUERY_LIMIT') {
                callback('----OVER_QUERY_LIMIT. Please try again after 10 seconds----');
                setTimeout(() => {
                    callback('Try again now');
                }, 10000)
            }
            else if (body.status === 'OK') {
                let formatted_address = body.results[0].formatted_address;
                let location = body.results[0].geometry.location;
                callback(undefined, {
                    formatted_address,
                    lat: location.lat,
                    lng: location.lng,
                })
            }
        });
}


const printArgv = (arg)=>{
    console.log(arg)
}

module.exports = {
    printArgv,
    geocodeAddress,
}