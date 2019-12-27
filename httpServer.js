/*In this we will use the HTTP Module and will use to create a Web Server with the same*/

const http = require('http');
const server = http.createServer(function (req,res){
    /*
        req -> request object
        res -> response object

        req is what the client requests from us.
        res is what we deliver to the client.
    */

    // res.write('Hello World from NodeJS');
    // res.end();

    //To Say Hello World only if you are on the root
    if(req.url === '/')
    {
        res.write("Hello World from nodeJS");
        res.end();
    }
    else
    {
        res.write("Using Some Other Domain");
        res.end();
    }
});

server.listen('3000'); //This Specifies on which port the server should listen