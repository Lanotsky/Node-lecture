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

const getNotes = ()=>{
    var notesObj = fetchFile();
    return notes = notesObj.notes;
}

module.exports = {
    addNote: (title, body) => {
        var notes = getNotes();
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
        let files = getNotes();
        let notes = files.filter((note)=>{
            return note.title != title;
        })
        (files.length === notes.length) ? console.log('no notes removed') : writeFile({ notes });
    },
    readNote: (title) => {
        let files = getNotes();
        let notes = files.filter((note) => {
            return note.title === title; 
        });
        if(notes.length!=0){
            console.log(`------------Note------------ \n#Title: ${notes[0].title}\n#Body: ${notes[0].body}\n ----------EndNote---------- `)
        } else {
            console.log(`------------Note------------ \n NOTE NOT FOUND\n ----------EndNote---------- `)
        }
    }
}