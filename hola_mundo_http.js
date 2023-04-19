//llamamos al modulo http
const { constants } = require('buffer');
const http=require('http');
//establecer la url o ip de nuestro sevidor
const hostname='192.168.1.26';
//establecer el puerto de escucha 
const port=3000;
//creamos una instancia http con un reques y un response
const server =http.createServer((req,res) =>{
//el servidor respondera con un codigo 200
res.statusCode=200;
//el servidor respondera con un texto plano
res.setHeader('Content-type', 'test/plain');
//el servidor respondera el menzaje hola mundo
res.end('HOLA MUNDO\n');
});

server.listen(port, hostname,() =>{
console.log(`el servidor se esta ejecutando en http://${hostname}:${port}/`)
});

