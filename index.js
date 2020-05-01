const {prompt} = require('inquirer')
let inquirer = require('inquirer')
const mysql = require('mysql2/promise')


// const actionquestions = [
//   {
//     type: 'list',
//     name: 'action',
//     message: 'what do you want to do?',
//     choices: [
//       {
//           name: 'Add department',
//           value: 'ADD_DEPARTMENT'
//       },
//       {
//         name: 'Add employee',
//         value: 'ADD_EMPLOYEE'
//       }
//     ]
//   }
// ]
// const answers = await prompt(questions)

// switch(answers.action){
//   case "ADD_DEPARTMENT":
//     // RUN INQUIRER ASK FOR THE REQUIRED VALUES
//     // SQL INSERT
//     // Ask action questions again
//   case "ADD_EMPLOYEE":
//     //
  
// }



inquirer
  .prompt([
    {
      type: 'list',
      message: 'Do you want to see employee',
      name: 'seeEmployee',
      choices: ['View Departments', 'View Employees', 'View Roles']
    }
    
    
    
  ])

  .then(function (data) {
    if (data.seeEmployee === "View Departments") {
      viewDepartments()
    }else if (data.seeEmployee === "View Roles") {
      viewRoles()
    } else if (data.seeEmployee === "View Employees") {
      viewEmployees()
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
