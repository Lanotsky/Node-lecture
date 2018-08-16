// As an asynchronous event driven JavaScript runtime, Node is 
// designed to build scalable network applications. 

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});
  

// This is in contrast to today's more common concurrency model where OS threads are employed. 
// Thread-based networking is relatively inefficient and very difficult to use. Furthermore, 
// users of Node are free from worries of dead-locking the process, since there are no locks. 
// Almost no function in Node directly performs I/O, so the process never blocks. 
// Because nothing blocks, scalable systems are very reasonable to develop in Node.


