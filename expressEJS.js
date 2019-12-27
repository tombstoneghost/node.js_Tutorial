const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use('/public', express.static(path.join(__dirname,'static')));
app.set('view engine', 'ejs');

app.get('/:userQuery', function (req,res){
    res.render('index',{data : {userQuery: req.params.userQuery,
                            searchResults : ['book1','book2','book3'],
                        loggedIn : true,
                        username: 'helloWorld'}});
});

app.listen('3000');