const fs = require("fs");
const chalk = require('chalk')

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(f => f.title === title);

    if (duplicateNotes.length === 0) {
        notes.push({
            title,
            body
        });
        console.log(chalk.green.inverse.bold("New Note Added..."));
    } else {
        console.log(chalk.red.inverse.bold("!!!Note Already Taken..."));
    }

    saveNotes( notes);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("./notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);

    } catch (e) {
        return [];
    }

}

const saveNotes =  (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync("./notes.json", dataJson);
}

const removeNotes = (title) => {
    const notes = loadNotes();
    const removeNotes = notes.filter(f => f.title !== title);

    saveNotes(removeNotes);

    console.log("Note Deleted")
}


const readNotes = () => {
    const notes = loadNotes();
    notes.map(i=> console.log(i.title));
}


module.exports = {
    addNotes,
    removeNotes,
    readNotes
}