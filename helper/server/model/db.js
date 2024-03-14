var mysql = require('mysql');

///////////////////////////////////////////////////////////////////////////////////////////

// Setup MySQL connection
// timezone is very NB

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'usersDB',
  timezone: 'utc+0'  
});

connection.connect(function(err){
	if(err) throw err;
	console.log(`Sucessfully connected to MySQL database usersDB`);
});

///////////////////////////////////////////////////////////////////////////////////////////

// GET /users
exports.getUsers = function(req,res){

    connection.query(`SELECT * FROM users`, function(err, rows, fields) {
        if (err) throw err;

        res.status(200);  // OK
        res.send(JSON.stringify(rows));	  
    });	
}


// GET /companies
// add your code here
exports.getCompanies = function (req, res){
    connection.query(`SELECT * FROM company`, function(err, rows, fields) {
        if (err) throw err;

        res.status(200);  // OK
        res.send(JSON.stringify(rows));	  
    });	


}


// GET /users/ID
// add your code here
exports.getUser = function(req,res){

    connection.query(`SELECT * FROM users WHERE id=${req.params.id}`, function(err, rows, fields) {
        if (err) throw err;

        res.status(200);  // OK
        res.send(JSON.stringify(rows));	  
    });	
}


// DELETE /company
// Use this to delete a company.  No need to add/change this code.
exports.deleteCompany = function(req,res){

    connection.query(`DELETE FROM company WHERE name='${req.params.name}'`, function(err, rows, fields) {
        if (err) throw err;

        res.status(204);  // OK
    });	
}

// POST /company
// Use this to add a company.  No need to add/change this code.
exports.addCompany = function(req,res){

    connection.query(`INSERT INTO company VALUES ('${req.body.name}')`, function(err, rows, fields) {
        if (err) throw err;

        const company = { name: req.body.name }
        res.send(JSON.stringify(company));
        res.status(201);  // OK    
    });	
}

