const fs = require('fs');

module.exports = {
    addNote: (title, body)=>{
        console.log(`added: 
                    title: ${title}
                    body:  ${body}`
                )
        fs.writeFileSync('notes.txt', `##${title}\n ${body}\n`, (err) => {
            if (err) {
                console.log(err);
            }
        })
    },
    listAllNotes: ()=> {
        fs.readFile('notes.txt','utf8',(err,data)=>{
            if(err) { throw err }
            console.log(data);
        })
    },
    removeNote: (title)=>{
        console.log('removed ' + title);
    },
    readNote: (title)=>{
        console.log('read title');
    }
    
}