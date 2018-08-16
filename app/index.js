// node modules act as a wrapper around your file
// 
// with its own globals like __filename and __dirname
const path = require('path');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');
const http = require('http');

// event emitter demo
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', function(a, b) {
    console.log(a) 
    console.log(b)
    console.log(this)
    // Prints:
    //   a b MyEmitter {
    //     domain: null,
    //     _events: { event: [Function] },
    //     _eventsCount: 1,
    //     _maxListeners: undefined } true
  });
  myEmitter.emit('event', 'a', 'b');
  myEmitter.emit('event', 'c', 'd');



const moduleDemo = ()=>{
    console.log(module.exports)
    console.log(require)
    console.log(__filename)
    console.log(__dirname)
}

const foo = ()=>{
    console.log('oo');
}


exports.demo = moduleDemo;
exports.foo = foo;