//C5 server.js
var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(request, response){
    console.log('request',request.url);

    var filepath = '.'+request.url;
    if (filepath =='/'){
        filepath = './index.html';
            }

    //C6 server completo
        
    // var extname = string(path.extname(filepath)).toLowerCase();
    // var contentType = 'text/html';
    // var mimeTypes = {

    //     '.html': 'text/html',
    //     '.js': 'text/javascript',
    //     '.css': 'text/css',
    //     '.json': 'application/json',
    //     '.png': 'image/png',
    //     '.jpg': 'image/jpg',
    //     '.gif': 'image/gif'
    //     //'.mp4': 'video/mp4'

    // };
    
    //C7 minitype

//     fs.readFile(filepath, function(error, content){
//         if(error){
//             if(error.code === 'ENOENT'){
//                 fs.readFile(filepath, function(

//             }
//         }
    
// });
//C8 codigos hhtp