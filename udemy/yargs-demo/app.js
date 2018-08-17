const yargs = require('yargs');
const notes = require('./notes');
// challenge: from user input, reply to specific commands and their properties
// eg node app.js <command> --key1="value" --key2="value"

const args = yargs.argv
const command_1 = args._[0] // returns an array of commands. In this case, we will only get the first value

if(command_1==='add') {
    notes.addNote(args.title, args.body);
} else if (command_1==='list') {
    notes.listAllNotes();
} else if (command_1==='remove') {
    notes.removeNote(args.title);
} else if (command_1==='read') {
    notes.listAllNotes();
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