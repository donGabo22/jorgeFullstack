const http = require('http');
const hostname = '192.168.1.14'; 
const port = 3000;
const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<p>gabriel desde vc con git </p>');
});

server.listen(port, hostname, () => {
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});