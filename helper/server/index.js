var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
// 
var model = require('./model/db.js');  //

var app = express();
app.use(cors());


// serves files in public folder
app.use(express.static('public'));

// NB:: this must be included to get JSON content sent with requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

///////////////////////////////////////////////////////////////////////////////////////////

// /users GET route
app.route('/users/')
  .get(function (req, res) {  
    model.getUsers(req, res);
  });

// /companies GET route
// add your code here
app.route('/companies/')
  .get(function (req, res){
    model.getCompanies(req, res);
  });

// /users/ID GET route
// add your code here
app.route('/user/:id?')
  .get(function (req, res) {  
    model.getUser(req, res);
  })


// /company DELETE route
app.route('/company/:name?')
  .delete(function (req, res) {  
    model.deleteCompany(req, res);
  })

// /company POST route
app.route('/company/')
  .post(function (req, res) {  
    model.addCompany(req, res);
  })

 
var myServer = app.listen(3000, function() {
  console.log("Server listening on port 3000");
});
