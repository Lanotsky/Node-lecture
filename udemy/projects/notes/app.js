// create a small notepad CRUD app
const fs = require('fs');
const yargs = require('yargs');
const notes = require('./notes');

const title = {
    describe: 'The title of the note',
    demand: true,
    alias: 'a' // -a="some title"
}

const args = yargs.
    command('add', 'Add a new note', {
        title,
        body: {
            describe: 'The content of the note',
            alias: 'b'
        }
    })
    .command('list', 'Lists all the notes in JSON from')
    .command('remove', 'Removes one note based on the title', {
        title,
    })
    .command('read', 'Reads one note based on the title', {
        title,
    })
    .help()
    .argv;

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