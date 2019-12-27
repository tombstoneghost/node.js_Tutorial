const express = require('express');
const path = require('path');
const joi = require('joi');
const app = express();
const bodyParser = require('body-parser');

app.use('/public', express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req,res){
    res.sendFile(path.join(__dirname,'static','loginForm.html'));
});

app.post('/', function (req,res) {
    console.log(req.body);
    const schema = joi.object().keys({
        //Set Rules on Data Received
        email : joi.string().trim().email().required(),
        password : joi.string().min(5).max(10).required()
    });
    joi.validate(req.body,schema, function (err,result) {
        if(err)
        {   
            console.log(err);
            res.send("An Error has Occured");
        }
        else
        {
            console.log(result);
            res.send("Successfully Posted Data");
        }
    });
});

app.listen('3000');