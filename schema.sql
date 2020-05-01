DROP DATABASE IF EXISTS employee_trackerdb;
CREATE database employee_trackerdb;

USE employee_trackerdb;

CREATE TABLE employee (
  id INTEGER
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INTEGER,
  manager_id INTEGER
  
  PRIMARY KEY (id)
);

CREATE TABLE rol (
  id INTEGER
  title VARCHAR(30)
  salary DECIMAL (10,4)
  department_id INTEGER
  
  PRIMARY KEY (id)
);

CREATE TABLE department (
  id INTEGER
  name VARCHAR (30)
  
  PRIMARY KEY (id)
);