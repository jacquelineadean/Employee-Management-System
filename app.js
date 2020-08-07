// Dependencies
// ===============================================================================
const { prompt } = require("inquirer");
const db = require("./db");
require("console.table");

// Run connection
connection.connect((err) => {
    if (err) throw err;
    // Call function to begin prompts
    runEmployeeTracker();
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
        .then((answer) => {
            // Different paths contigent on action selected
            switch (answer.action) {
                case "View All Employees":
                    viewEmployees();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "View All Departments":
                    viewDepartments();
                    break;
                case "Add Department":
                    addDepartment();
                    break;
                case "View All Roles":
                    viewRoles();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "Update Employee Role":
                    updateEmployeeRole();
                    break;
            }
        });
};

// Function to view employees
function viewEmployees() {
   
    var query = 
    `SELECT department.name, role.title, role.salary, employee.first_name, employee.last_name, employee.manager_id
    FROM department 
    RIGHT JOIN role ON department.id = role.department_id
    RIGHT JOIN employee ON role.id = employee.role_id;`

    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        runEmployeeTracker();
    })
};

// Function to add employee
function addEmployee() {
    inquirer
        .prompt([
            {
                name: "first_name",
                type: "input",
                message: "What is the employee's first name?"
            },
            {
                name: "last_name",
                type: "input",
                message: "What is the employee's last name?"
            },
            {
                name: "role",
                type: "list",
                message: "What is the employee's role?",
                choices: []
            },
            {
                name: "manager",
                type: "input",
                message: "Who is the employee's manager?",
                choices: []
            }
        ]).then(function (response) {
            var query = "INSERT INTO employee SET ?"
            connection.query(query,
                {
                    first_name: response.first_name,
                    last_name: response.last_name,
                    role_id: response.role.id,
                    manager_id: response.manager_id
                },
                function (err, res) {
                    if (err) throw err;
                    runEmployeeTracker();
                }
            )

        })
};

// Function to view departments
function viewDepartments() { }

// Function to add department
function addDepartment() { }

// Function to view roles
function viewRoles() { }

// Function to add role
function addRole() { }

// Function to update employee role
function updateEmployeeRole() { }
