const express = require('express');
const app = express();

app.get('/', function (req,res){    //app.get is a route function
    res.send('Hello World');
});

/*Working with Express Get Requests*/

app.get('/example', function (req,res){
    res.send('Hitting Example Route');
});

//Route Parameters

app.get('/example/:name/:age', function (req,res) {
    console.log(req.params);
    //res.send('Example with Route Params');
    console.log(req.query); //Pass a Query by adding ? in the URL followed by the key and value
    res.send(req.params.name + " : " + req.params.age);
});

app.listen('3000');