var express = require('express');
var router = express.Router();
var mysql = require('mysql');

// GET homepage
router.get('/', function(req, res, next) {

    // establish database connection
    var connection = mysql.createConnection(process.env.DATABASE_URL);
    connection.connect();

    // get name to display from database and render it
    connection.query('select name from names', function(err, rows, fields) {
        if (err) throw err;
        res.render('index', {title: rows[0].name});
    });

    // close database connection
    connection.end();
});

module.exports = router;