module.exports.saveUser = (user)=>{
    const email = user.email;
    const passowrd = user.password;
    console.log('getting user agent: ', email )
    console.log('getting user agent: ', passowrd)
}

// spies swap real functions for test utiliteis