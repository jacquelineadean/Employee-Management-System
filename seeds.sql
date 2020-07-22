-- Department Table
INSERT INTO department (name) VALUES ('Engineering');
INSERT INTO department (name) VALUES ('Sales');
INSERT INTO department (name) VALUES ('Finance');
INSERT INTO department (name) VALUES ('Legal');

-- Role Table
INSERT INTO role (title, salary, department_id) VALUES ('Software Engineer', '120000', '1');
INSERT INTO role (title, salary, department_id) VALUES ('Lead Engineer', '180000', '1');
INSERT INTO role (title, salary, department_id) VALUES ('Sales Lead', '100000', '2');
INSERT INTO role (title, salary, department_id) VALUES ('Salesperson', '60000', '2');
INSERT INTO role (title, salary, department_id) VALUES ('Accountant', '110000', '3');
INSERT INTO role (title, salary, department_id) VALUES ('Legal Team Lead', '200000', '4');
INSERT INTO role (title, salary, department_id) VALUES ('Lawyer', '150000', '4');

-- Employee Table
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Pam', 'Beesly', '1', '2');
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Dwight', 'Schrute', '2');
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Jim', 'Halpert', '3');
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Michael', 'Scott', '4', '3');
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Oscar', 'Nunez', '5');
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Stanley', 'Hudson', '6');
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Ryan', 'Howard', '7', '6');






