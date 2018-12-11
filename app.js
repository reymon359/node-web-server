const http = require('http');
//to listen to http calls we first have to create the server whith .createServer()
http.createServer((req, res) => {

        //normal request that returns a response data in a json
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let response = {
            name: 'ramon',
            age: 24,
            url: req.url
        }
        res.write(JSON.stringify(response));


        //this creates a html page with the hello word text
        // res.write('Hello world');
        res.end();
    })
    .listen(8080); //the port that will listen to 
console.log('listening 8080');