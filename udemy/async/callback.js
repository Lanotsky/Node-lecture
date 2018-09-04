// callabcks

var getUser = (id, callback) => {
    callback(id);
}

getUser(12, (e) => console.log(e))
// https://maps.googleapis.com/maps/api/geocode/json?adress=1301 lombard street philladelphia
// // https://maps.googleapis.com/maps/api/geocode/json?adresss= mkinley hill taguig
// https://maps.googleapis.com/maps/api/geocode/json?address=taguig