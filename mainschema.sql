DROP DATABASE IF EXISTS employee_trackerdb;
CREATE database employee_trackerdb;

USE employee_trackerdb;

CREATE TABLE employee (
  id INTEGER auto_increment,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INTEGER,
  manager_id INTEGER,
  
 PRIMARY KEY (id)
);

CREATE TABLE role (
  id INTEGER auto_increment,
  title VARCHAR(30),
  salary DECIMAL (10,4),
  department_id INTEGER,
  
  PRIMARY KEY (id)
);

CREATE TABLE department (
  id INTEGER auto_increment,
  name VARCHAR (30),
  
  PRIMARY KEY (id)
);