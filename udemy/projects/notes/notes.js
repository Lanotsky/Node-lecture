// functions for notes
const fs = require('fs');

const addNote = (title, body)=>{
    let note = {
        title,
        body
    }
    this.notes.push(note);
    return notes;
}

const removeNote = (title)=>{

}

// const notes = [];
// notes.map((note)=>{
//     if(note.title==='someVariable') {
//         // remove it from array
//         // possibly return it. Somewhere 
//         let index = notes.findIndex((note) => {
//             return note.title === 'someValue' ? note : -1;
//         })
//         notes.splice(index);

//     }
// })
const count = 0;
module.exports = {
    addNote: (title, body) => {
        try {
            var notesStr = fs.readFileSync('notes.json');
            var notesOjb = JSON.parse(notesStr);
        } catch (error) {
            notesOjb = {notes:[]};
            console.log('no file found. Writing new file');
        }
        const notes = notesOjb.notes;
        let duplicateNotes = notes.filter((note)=> note.title===title);
        if(duplicateNotes.length===0) {
            notes.push({ id: null, title, body });
            console.log(`added: 
                    title: ${title}
                    body:  ${body}`
            );
        }
        fs.writeFileSync('notes.json', JSON.stringify(notesOjb,null,4), (err) => {
            if (err) {
                console.log(err);
            }
        });
    },
    listAllNotes: () => {
        fs.readFile('notes.json', 'utf8', (err, data) => {
            if (err) { throw err }
            console.log(data);
        })
    },
    removeNote: (title) => {
        console.log('removed ' + title);
    },
    readNote: (title) => {
        console.log('read title');
    }
}