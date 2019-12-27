const http = require('http');
const fs = require('fs');

http.createServer(function (req,res)
{
    const readStream = fs.createReadStream('./static/index.html');
    res.writeHead(200,{'Content-type' : 'text/html'}); //We Pass the HTTP Status Code, 200 means Successfull
    /*To run a json file:
        Content-type : application/json
      To run a image file:
        Content-type : image/png */
    readStream.pipe(res);
}).listen('3000');

