const request  = require('supertest'); // assertion lib
const server = require('./server');
const expect = require('expect');
// const mocha = require('mocha')

var app = server.app;

describe('server-tests',()=>{
    it('should contain this data format', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect((res) => {
                expect(res.body).toContain({
                    data: {}
                })
            })
            .end(done)
    })

    it('should contain user aaron', (done) => {
        request(app)
            .get('/users')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect((res) => {
                expect(res.body).toInclude(
                    {
                        name: 'aaron',
                        age: 23,
                    }
                )
            })
            .end(done)
    })
})

