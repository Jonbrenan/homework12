const {prompt} = require('inquirer')

const actionquestions = [
  {
    type: 'list',
    name: 'action',
    message: 'what do you want to do?',
    choices: [
      {
          name: 'Add department',
          value: 'ADD_DEPARTMENT'
      },
      {
        name: 'Add employee',
        value: 'ADD_EMPLOYEE'
      }
    ]
  }
]
const answers = await prompt(questions)

switch(answers.action){
  case "ADD_DEPARTMENT":
    // RUN INQUIRER ASK FOR THE REQUIRED VALUES
    // SQL INSERT
    // Ask action questions again
  case "ADD_EMPLOYEE":
    //
  
}