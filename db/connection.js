// Require Dependencies
const util = require("util");
const mysql = require("mysql");

// Create connection to database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "dbpassword",
    database: "employeeTracker_DB",
    insecureAuth: true
});

// Initialize connection
connection.connect();

// Setup connection query using promises
connection.query = util.promisify(connection.query);

// Export connection
module.exports = connection;