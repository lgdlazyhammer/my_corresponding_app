// set variables for environment
var express = require('express');
var app = express();
//use default express session store
var session = require('express-session');
app.use(session({ secret: 'keyboard cat' , cookie: { maxAge: 60000 }}));

//use cookie parser to get request cookies value
var cookieParser = require('cookie-parser');
app.use(cookieParser());

var path = require('path');

var http = require('http');
var querystring = require('querystring');
//parse post parameters
var bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// views as directory for all template files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // use either jade or ejs       
// instruct express to server up static assets
app.use(express.static('public'));
// Set server port
app.listen(8080);
console.log('server is running on port 8080');

app.use('/index', function(req, res) {
        
        res.render('index');
});


// set routes
app.use('/correspond/redirect', function(req, res) {
    
    if (req.method == 'GET'){
        console.log(req.query.screensize);
        console.log(req.query.screensizehidden);
        
    }
    
    
    if (req.method == 'POST'){
        console.log(req.body.screensize);
        console.log(req.body.screensizehidden);
        console.log(req.query.screensizehidden < 990);
        
        if(req.body.screensizehidden < 990){
            res.render('index_mobile');
        }else{
            res.render('index_desktop');
        }
    }
     
});