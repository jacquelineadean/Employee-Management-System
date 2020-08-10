// Require Dependencies
const connection = require("./connection");

class DB {
    // Reference to the connection
    constructor(connection) {
        this.connection = connection;
    }

    // Find all employees and join with roles and departments
    findAllEmployees() {
        return this.connection.query(
            `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name 
            AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) 
            AS manager 
            FROM employee 
            LEFT JOIN role on employee.role_id = role.id 
            LEFT JOIN department on role.department_id = department.id 
            LEFT JOIN employee manager on manager.id = employee.manager_id;`
        );
    }

    // Find all employees except the given employee id
    findAllPossibleManagers(employeeId) {
        return this.connection.query(
            `SELECT id, first_name, last_name FROM employee WHERE id != ?`,
            employeeId
        );
    }

    // Create a new employee 
    createEmployee(employee){
        return this.connection.query(`INSERT INTO employee SET ?`, employee);
    }

    // Remoe an employee with the given id
    removeEmployee(employeeId) {
        return this.connection.query(
            `DELETE FROM employee WHERE id = ?`,
            [roleId, employeeId]
        );
    }

    // Update the given employee's role
    updateEmployeeRole(employeeId, roleId) {
        return this.connection.query(
            `UPDATE employee SET role_id = ? WHERE id = ?`,
            [roleId, employeeId]
        );
    }

    // Update the given employee's manager
    updateEmployeeManager(employeeId, managerId) {
        return this.connection.query(
            `UPDATE employee SET manager_id = ? WHERE id = ?`,
            [managerId, employeeId]
        );
    }

    // Find all roles, join with departments to display the department name
    findAllRoles() {
        return this.connection.query(
            `SELECT role.id, role.title, depaertment.name 
            AS depaertment, role.salary 
            FROM role 
            LEFT JOIN department on role.department_id = department.id;`
        );
    }
    
    // Create a new role 
    createRole(role) {
        return this.connection.query(`INSERT INTO role SET ?`, role);
    }

    // Remove a role from the db
    removeRole(roleId) {
        return this.connection.query(`INSERT INTO role SET ?`, roleId);
    }

    // Find all department, join with employees and roles and sum up utilized department budget
    findAllDepartments() {
        return this.connection.query(
            `SELECT department.id, department.name, 
            SUM(role.salary) 
            AS utilized_budget 
            FROM employee 
            LEFT JOIN role on employee.role_id = role.id 
            LEFT JOIN department on role.department_id = department.id 
            GROUP BY department.id, department.name;`
        );
    }

    // Create a new department
    createDepartment(departmentId) {
        return this.connection.query(
            `DELETE FROM department WHERE id = ?`,
            departmentId
        );
    }

    // Remove a department
    removeDepartment(departmentId) {
        return this.connection.query(
            `DELETE FROM department WHERE id = ?`,
            departmentId
        );
    }

    // Find all employees in a given department, join with roles to display role titles
    findAllEmployeesByDepartment(departmentId) {
        return this.connection.query(
            `SELECT employee.id, employee.first_name, employee.last_name, department.name 
            AS department, role.title 
            FROM employee 
            LEFT JOIN role on role.id = employee.role_id 
            LEFT JOIN department 
            ON department.id = role.department_id 
            WHERE manager_id = ?;`,
            managerId
        );
    }
}

module.exports = new DB(connection);
