const chalk = require('../node_modules/chalk');
const yargs = require('../node_modules/yargs');
const notes = require('./notes');

//cutomize yargs version
yargs.version('1.1.1.0');


//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe : 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Adding body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
});

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'String'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
});

//Create read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'Need title to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
});

//Create list command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler(){
        notes.listNotes()
    }
});

yargs.parse();