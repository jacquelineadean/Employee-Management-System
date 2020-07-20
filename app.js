// Dependencies
// ===============================================================================
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

// Connection details to employeeTracker_DB in MySQL database 
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "employeeTracker_DB"
});

// Run connection
connection.connect((err) => {
    if (err) throw err;
});

// Function to start the command-line application and prompts
function runEmployeeTracker() {
    inquirer
    .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View All Employees",
            "Add Employee",
            "View All Departments",
            "Add Department",
            "View All Roles",
            "Add Role",
            "Update Employee Role"
        ]
    })
    .then(({ action }) => {
        // Different paths contigent on action selected
        switch (action) {
        case "View All Employees":
            viewEmployees();
            break;
        case "Add Employee":
            addEmployee();
            break;
        }
    });
};

// Function to view employees
function viewEmployees() {
    var query = "SELECT id, first_name, last_name, role_id, manager_id FROM employee";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
    })
};

// Function to add employee
function addEmployee() {

};

// Call function to begin prompts
runEmployeeTracker();
