// Dependencies
// ===============================================================================
var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

// Connection details to employeeTracker_DB in MySQL database 
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "dbpassword",
    database: "employeeTracker_DB",
    insecureAuth : true
});

// Run connection
connection.connect(function(err) {
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
    .then(function(answer) {
        // Different paths contigent on action selected
        switch (answer.action) {
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
    var query = "SELECT * id, first_name, last_name, role_id, manager_id FROM employee";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
    })
};

// Function to add employee
// function addEmployee() {
//     inquirer
//     .prompt({
//         name: "first_name",
//         type: "input",
//         message: "What is the employee's first name?"
//     })
//     .then(function(answer){
//         var query = "INSERT INTO employee SET ?",
//         connection.query(query,
//             {
//                 first_name: response.first_name,
//                 last_name: response.last_name,
//                 role_id: response.role.id,
//                 manager_id: response.manager_id
//             },
//             function (err, res) {

//             })
//     })
// };

// Call function to begin prompts
runEmployeeTracker();

connection.end();
