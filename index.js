const express = require("express");
const app = express();
const port = 8008;
const path = require("path");
const static_path = path.join(__dirname, "public");
app.use(express.static(static_path));

app.listen(port, () => {
  console.log(`Server Is Running On Port : ${port}`);
});

/*

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();
*/
