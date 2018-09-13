module.exports = {
    add: (a , b) => {
        return a + b;
    },
    square: (number, callback) => {
        setTimeout(()=>{
            callback(number * number);
        },500);
    },
    setName: (user, fullName) => {
        var names = fullName.split(' ');
        user.firstName = names[0];
        user.lastName = names[1];
        return user;
    }
}