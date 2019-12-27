const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
//Custom Middleware
app.use((req,res,next)=>{
    console.log(req.url, req.method);   //To use Middle when a particular route is there you add '/route',(req,res,next)..... 
    req.banana = 'banana';
    next();
});

app.get('/', function (req,res){
    console.log(req.banana);
    res.send('Middleware');
});

app.listen('3000');