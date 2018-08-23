// create a small notepad CRUD app
const fs = require('fs');
const yargs = require('yargs');
const notes = require('./notes');

const args = yargs.argv
const command_1 = args._[0] // returns an array of commands. In this case, we will only get the first value

if (command_1 === 'add') {
    notes.addNote(args.title, args.body);
} else if (command_1 === 'list') {
    notes.listAllNotes();
} else if (command_1 === 'remove') {
    notes.removeNote(args.title);
} else if (command_1 === 'read') {
    notes.readNote(args.title);
} else {
    console.log(`
    command --> ${args._} not recognized

    available commands:
    add
        --add
    list
        --list
    remove
        --remove
    read
        --read
    `);
}