const http = require('http');
// Let's simplify the previous example to make a simple echo server, 
// which just sends whatever data is received in the request right 
// back in the response. All we need to do is grab the data from 
// the request stream and write that data to the response stream

http.createServer((req, res)=>{
    req.on('error', (err)=>{
        console.log(err.stack);
        res.statusCode = 400;
        res.end();
    })
    res.on('err', (err)=>{
        console.log(err);
    })
    if(req.method==='POST' && req.url==='/echo'){
        req.pipe(res);
    }else {
        res.statusCode = 404;
        res.end();
    }
}).listen(8000)
