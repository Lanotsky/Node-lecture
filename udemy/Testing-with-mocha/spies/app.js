const db = require('./db');

module.exports.handleSignup = (email, password)=>{
    // check if email exist
    db.saveUser({
        email,
        password,
    })
    // save user to db
    // send the welcome message
}