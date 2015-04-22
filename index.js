var express = require('express');
var app = express();
var Router = require('app/routes/gateway.route');

//configure body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: false}));

//route 
app.use('/', Router);

var port = process.env.NODE_ENV || 8100;

app.listen(port, function(){
  console.log("App working at port: " + port);
});
