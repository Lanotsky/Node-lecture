const utils = require('./utlis')
const expect = require('expect');

describe('utils-test',()=>{
    it('should add two numbers', () => {
        // assert something
        var result = utils.add(30, 30)
        if (typeof (result) === 'number') {
            console.log('ok')
        } else {
            throw new Error('Shoud be number')
        }
    });

    it('should add two numbers', () => {
        var res = utils.add(33, 11);
        expect(res).toBeA('number')
    });

    it('should square a number', (done) => {
        var res = utils.square(3, (x) => {
            expect(x).toBe(9).toBeA('number');
            done();
        });

    });

    it('should set firstName and lastName', () => {
        var user = { location: 'Philadelphia', age: 25 };
        var res = utils.setName(user, 'Andrew Mead');

        expect(res).toInclude({
            firstName: 'Andrew',
            lastName: 'Mead'
        });
    });

})

// when automating tests 
// use: "nodemon --exec \"npm test\"" to watch the test file 
// see on how to use globs