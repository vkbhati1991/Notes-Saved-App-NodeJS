const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs');


yargs.version("1.1.0");

yargs.command({
    command: "add",
    describe: chalk.green.inverse.bold("Add a new notes"),
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note Content",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        notes.addNotes(argv.title, argv.body);
    }
});

yargs.command({
    command: "remove",
    describe: chalk.green.inverse.bold("Remove a notes"),
    builder: {
        title: {
            describe: "Note title to be removed",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command: "read",
    describe: chalk.green.inverse.bold("Read a notes"),
    handler: function () {
        notes.readNotes();
    }
})


yargs.command({
    command: "list",
    describe: chalk.green.inverse.bold("list of notes"),
    handler: () => {
        console.log(chalk.green.inverse.bold("list of notes"))
    }

})

yargs.parse();