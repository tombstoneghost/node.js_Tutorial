const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use('/public', express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function (req,res){
    res.sendFile(path.join(__dirname,'static','loginForm.html'));
});

app.post('/', function (req,res) {
    console.log(req.body);
    //Database Work!!!
    res.json({success : true});
});

app.listen('3000');