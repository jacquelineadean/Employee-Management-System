DROP DATABASE IF EXISTS employeeTracker_DB;
CREATE database employeeTracker_DB;

USE employeeTracker_DB;

-- department table 
CREATE TABLE department (
  -- id will automatically increment  
  id INT NOT NULL AUTO_INCREMENT,
  -- department name
  name VARCHAR(30),
  -- set id as the primary key
  PRIMARY KEY (id)
);

-- role table
CREATE TABLE role (
  -- id will automatically increment 
  id INT NOT NULL AUTO_INCREMENT,
  -- title to hold role title
  title VARCHAR(30),
  -- salary 
  salary DECIMAL,
  -- department id 
  department_id INT,
  -- set id as the primary key
  PRIMARY KEY (id)
);

-- employee table
CREATE TABLE employee (
  -- id will automatically increment 
  id INT NOT NULL AUTO_INCREMENT,
  -- employee first name
  first_name VARCHAR(30),
  -- employee last name 
  last_name VARCHAR(30),
  -- role id
  role_id INT,
  -- manager id to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager
  manager_id INT NULL, 
  -- set id as the primary key
  PRIMARY KEY (id)
);
