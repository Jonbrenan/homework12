USE employee_trackerdb;

INSERT INTO employee SET first_name = 'Jonathan', last_name = 'Brennan', role_id = 1, manager_id = 1;
INSERT INTO employee SET first_name = 'Abdul', last_name = 'Amoud', role_id = 2, manager_id = 1;
INSERT INTO employee SET first_name = 'Jane', last_name = 'Doe', role_id = 3, manager_id = 1;

INSERT INTO role SET title = 'Cash-Man', salary = 1000, department_id = 1;
INSERT INTO role SET title = 'Speaker', salary = 500, department_id = 2;
INSERT INTO role SET title = 'Developer', salary = 100000, department_id = 3;


INSERT INTO department SET name = 'management';
INSERT INTO department SET name = 'outreach';
INSERT INTO department SET name = 'development';

