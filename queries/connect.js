// import and require mysql
const mysql = require('mysql2');

// make the connection to a database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'AdR!&@uDr!@',
    database: 'employee_tracker_db'
});

// create function to throw error message if error or a message stating you are connected
db.connect(function(err) {
    if (err) {
        console.error('There was an error connecting: ' + err.stack);
        return;
    }
    console.log('Your are connected as id ' + db.threadID);
});

// module.exports = ?
module.exports = db;