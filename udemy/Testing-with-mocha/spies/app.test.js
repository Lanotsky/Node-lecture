const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app'); // creates a mock of the app.js exports
// app.__set__
// app.__get__

var db = {
    saveUser: expect.createSpy()
} // spy object method to replace the saveUser method in the app

app.__set__('db', db); // replaces the db method

describe('app',()=>{
    it('Should call the spies', () => {
        var spy = expect.createSpy();
        spy('Aaron', 25);
        expect(spy).toHaveBeenCalledWith('Aaron', 25);
    });

    it('Shout call user with user obj',()=>{
        var email = 'person@gmail.com';
        var password = 'somePassword';
        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password})
    })
})


// this makes it possible to test functions that is called by 
// other functions