const mysql = require('mysql')

const con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "19941124"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
})