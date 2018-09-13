const express = require('express');

var app = express();

app.get('/',(req,res)=>{
    res.send({
        data: {
            dataEntry: 'somedata'
        }
    })
})

app.get('/users', (req, res) => {
    res.send(
         [
            {
                name: 'aaron',
                age: 23,
            },
            {
                name: 'bob',
                age: 40
            }
        ]
    )
})


app.listen(3000);

module.exports={
    app,
}