const songlist = require('./songlist');
const fs = require('fs');

// from an original string parse it to json
// then from json read it as string

const songsJSON = JSON.stringify(songlist,null, 4); // value, function replacer, and number of spaces for readability

fs.writeFile('songlist.json', songsJSON, (err)=>{
    if(err) {
        throw err;
    }
})


fs.readFile('songlist.json', 'utf8', (err, data)=>{
    if(err) {
        return err;
    }
    let stringData = JSON.parse(data);
    console.log(stringData);
})
