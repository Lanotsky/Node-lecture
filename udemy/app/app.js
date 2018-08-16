// third party modules
const _ = require('lodash');
// native modules
const fs = require('fs');
// user added modules


let command = process.argv; // is an array that access the commands i.e node [1] app.js [2] args[3]

// support for various commands
switch (command[2]) {
    case 'add':
        console.log('demo- appending to notes');
        break;
    case 'list':
        console.log('demo-listing all notes');
        break;
    default:
        console.log(`
        ${command[2]} not recognized.
        List of commands:
        {
            add: appending to notes,
            list: list all notes,
        }
        `);
        break;
}

console.log(process.argv);