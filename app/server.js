const http = require('http');
// creating a server
// mano mano. Bare node.js way of doing it
const server = http.createServer((request, response)=>{
    const { headers, method, url } = request; // google this syntax!
    // request handler magic
    // request headers 
    let body = [];
    request.on('error', (err)=>{
        console.log(err.stack);
    }).on('data', (chunk)=>{
        body.push(chunk)
    }).on('end', ()=>{
        // implement the buffer interface
        body = Buffer.concat(body).toString()
        // At this point, we have the headers, method, url and body, and can now
        // do whatever we need to in order to respond to this request.

        // RESPONSE
        response.on('error', (err)=>{
            console.log(err.stack)
        })
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        // Note: the 2 lines above could be replaced with this next one:
        // response.writeHead(200, {'Content-Type': 'application/json'})
        const responseBody = { headers, method, url, body };

        response.write(JSON.stringify(responseBody));
        response.end();
        // Note: the 2 lines above could be replaced with this next one:
        // response.end(JSON.stringify(responseBody))
    
        // END OF NEW STUFF
    })

})

// The method here will always be a normal HTTP method/verb. 
// The url is the full URL without the server, protocol or port.
// For a typical URL, this means everything after and including 
// the third forward slash.

server.listen(8000)
