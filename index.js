
let inquirer = require('inquirer')
const mysql = require('mysql2/promise')




inquirer
  .prompt([
    {
      type: 'list',
      message: 'What do you want to do?',
      name: 'seeEmployee',
      choices: ['View Departments', 'View Employees', 'View Roles', 'Add Department', 'Add Employee', 'Add Role', 'Update Role']
    }
    
    
    
  ])

  .then(function (data) {
    if (data.seeEmployee === "View Departments") {
      viewDepartments()
    }else if (data.seeEmployee === "View Roles") {
      viewRoles()
    } else if (data.seeEmployee === "View Employees") {
      viewEmployees()
    } else if (data.seeEmployee === "Add Department") {
      inquirer
      .prompt([
        {
          type: 'input',
          name: 'newDepartment',
          message: 'What is name of new department'
        },
      
      ])
      .then( addDepartment )
        
    } else if (data.seeEmployee === "Add Employee") {
      inquirer
      .prompt([
        {
          type: 'input',
          name: 'newEmployeeFirstName',
          message: 'What is the first name of new employee'
        },
        {
          type: 'input',
          name: 'newEmployeeLastName',
          message: 'What is the Last name of new employee'
        },
        {
          type: 'input',
          name: 'newEmployeeRole',
          message: 'What is the Role name of new employee'
        },
        {
          type: 'input',
          name: 'newEmployeeManager',
          message: 'Who is the Manager of new employee'
        },
      ])
      .then (addEmployee)
    } else if (data.seeEmployee === "Add Role") {
      inquirer
      .prompt([
        {
          type: 'input',
          name: 'newRoleTitle',
          message: 'What is the title of your new role?'
        },
        {
          type: 'input',
          name: 'newRoleSalary',
          message: 'What is the salary of new role?'
        },
        {
          type: 'input',
          name: 'newRoleDepartmentID',
          message: 'what is new roles Department ID?'
        },
      ])
      .then (addRole)
    } else if (data.seeEmployee === 'Update Role') {
      inquirer
      .prompt([
        {
          type: 'input',
          name: 'whoToChangeRole',
          message: 'State ID # of employee whos role you wish to chance?'
        },
        {
          type: 'input',
          name: 'whatRoleToChange',
          message: 'what role do you want to set as new role?'
        }
      ])
      .then (updateRole)
    }
  })



let connection


async function viewDepartments () {
  try {
    await connect()
    await listDepartments()
  } catch (error) {
    console.error(error)
  } finally {
    connection.end()
  }
}


async function viewEmployees () {
  try {
    await connect()
    await listEmployees()
  } catch (error) {
    console.error(error)
  } finally {
    connection.end()
  }
}


async function viewRoles () {
  try {
    await connect()
    await listRoles()
  } catch (error) {
    console.error(error)
  } finally {
    connection.end()
  }
}

async function connect () {
  connection = await mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Black117!',
    database: 'employee_trackerdb'
  })
  console.log('connected as id ' + connection.threadId)
}

async function listDepartments () {
  console.log('Selecting all products ...\n')
  const [rows] = await connection.query('SELECT * from `department`')
  console.table(rows)
}


async function listRoles () {
  console.log('Selecting all products ...\n')
  const [rows] = await connection.query('SELECT * from `role`')
  console.table(rows)
}

async function listEmployees () {
  console.log('Selecting all products ...\n')
  const [rows] = await connection.query('SELECT * from `employee`')
  console.table(rows)
}


async function addDepartment (answer) {
  try {
    await connect()
    await insertDepartment(answer.newDepartment)
  } catch (error) {
    console.error(error)
  } finally {
    connection.end()
  }
}

async function addEmployee (answer1) {
  try {
    await connect()
    await insertEmployee(answer1.newEmployeeFirstName, answer1.newEmployeeLastName, answer1.newEmployeeRole, answer1.newEmployeeManager )
  } catch (error) {
    console.error(error)
  } finally {
    connection.end()
  }
}

// newEmployeeLastName, newEmployeeRole, newEmployeeManager

async function insertEmployee(newEmployeeFirstName, newEmployeeLastName, newEmployeeRole, newEmployeeManager ){
  console.log('Inserting a new product ...\n')
  console.log('Selecting all products ...\n')
  const [rows] = await connection.query(`INSERT INTO employee SET first_name = '${newEmployeeFirstName}', last_name = '${newEmployeeLastName}', role_id = ${newEmployeeRole}, manager_id = ${newEmployeeManager};`)
  console.table(rows)
}


async function insertDepartment(newDepartment){
  console.log('Inserting a new product ...\n')
  console.log('Selecting all products ...\n')
  const [rows] = await connection.query(`INSERT INTO department SET name = '${newDepartment}'`)
  console.table(rows)
}


async function addRole (x) {
  try {
    await connect()
    await insertRole(x.newRoleTitle, x.newRoleSalary, x.newRoleDepartmentID,)
  } catch (error) {
    console.error(error)
  } finally {
    connection.end()
  }
}

async function insertRole(newRoleTitle, newRoleSalary, newRoleDepartmentID){
  console.log('Inserting a new product ...\n')
  console.log('Selecting all products ...\n')
  const [rows] = await connection.query(`INSERT INTO role SET title = '${newRoleTitle}', salary = ${newRoleSalary}, department_id = ${newRoleDepartmentID}`)
  console.table(rows)
}


async function updateRole (x) {
  try {
    await connect()
    await insertUpdateRole(x.whoToChangeRole, x.whatRoleToChange)
  } catch (error) {
    console.error(error)
  } finally {
    connection.end()
  }
}

async function insertUpdateRole (whatRoleToChange, whoToChangeRole) {
  console.log('Updating all Rocky Road quantities ...\n')
  const [results] = await connection.query('UPDATE employee SET ? WHERE ?', [
    { role_id: whatRoleToChange },
    { id: whoToChangeRole }
  ])
  console.table(results)
}