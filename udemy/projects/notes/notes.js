// functions for notes
const fs = require('fs');

const fetchFile = () => {
    try {
        var notesStr = fs.readFileSync('notes.json');
        var notesOjb = JSON.parse(notesStr);
    } catch (error) {
        notesOjb = { notes: [] };
        console.log('no file found. Writing new file');
    }
    return notesOjb;
}

const writeFile = (notesOjb)=> {
    fs.writeFileSync('notes.json', JSON.stringify(notesOjb, null, 4), (err) => {
        if (err) {
            console.log(err);
        }
    });
}

module.exports = {
    addNote: (title, body) => {
        var notesObj = fetchFile();
        var notes = notesObj.notes;
        let duplicateNotes = notes.filter((note)=> note.title===title);
        if(duplicateNotes.length===0) {
            notes.push({ id: null, title, body });
            console.log(`added: 
                    title: ${title}
                    body:  ${body}`
            );
            writeFile(notesObj);
        }
    },
    listAllNotes: () => {
        fs.readFile('notes.json', 'utf8', (err, data) => {
            if (err) { throw err }
            console.log(data);
        })
    },
    removeNote: (title) => {
        let file = fetchFile();
        let files = file.notes;
        let notes = files.filter((note)=>{
            return note.title != title;
        })
        console.log(notes);
        writeFile({notes});
    },
    readNote: (title) => {
        console.log('read title');
    }
}