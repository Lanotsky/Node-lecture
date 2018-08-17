const _ = require('lodash');
const yargs = require('yargs');
const fs = require('fs');
const os = require('os');
const notes = require('./notes');


let userResult = os.userInfo();
const argv = yargs.argv;
let command = process.argv; // is an array that access the commands i.e node [1] app.js [2] args[3]
console.log(argv);
// support for various commands
let bDate = '1995,2,17';
switch (command[2]) {
    case 'add':
        notes.changeName(argv.name);
        fs.appendFileSync(
            'greetings.txt', 
            `message from ${notes.name} '${notes.message}' to ${userResult.username}
            ${notes.name}'s age is is ${notes.getAge(bDate)}\n`,
            (err) => {
                console.log(err);
                console.log('cannot write to file');
            });

        break;
    case 'list':
        console.log('demo-listing all notes');
        fs.readFile('greetings.txt', 'utf8',(err,data)=>{
            if(err) {
                return err
            }
            console.log(data);
        });
        break;
    case 'remove':
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
