import inquirer from "inquirer"

// import Engineer from "./lib/engineer"
// import Intern from "./lib/intern"
// import Manager from "./lib/manager"

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the team manager:'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter the id of the team manager:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the email of the team manager:'
    },
    {
        type: 'input',
        name: 'office',
        message: 'Please enter the office number of the team manager:'
    },
    {
        type: 'list',
        name: 'type',
        message: 'Please select the type of employee you want to add',
        choices: ['engineer', 'intern', 'finalize team']
    },
    {
        type: 'input',
        name: 'engineername',
        message: 'Please enter the name of the engineer',
        when: (input) => input.type === 'engineer'
    },
    {
        type: 'input',
        name: 'engineerid',
        message: 'Please enter the id of the engineer',
        when: (input) => input.type === 'engineer'
    },
    {
        type: 'input',
        name: 'engineeremail',
        message: 'Please enter the email of the engineer',
        when: (input) => input.type === 'engineer'
    },
    {
        type: 'input',
        name: 'internname',
        message: 'Please enter the name of the intern',
        when: (input) => input.type === 'intern'
    },
    {
        type: 'input',
        name: 'internid',
        message: 'Please enter the id of the intern',
        when: (input) => input.type === 'intern'
    },
    {
        type: 'input',
        name: 'internemail',
        message: 'Please enter the email of the intern',
        when: (input) => input.type === 'intern'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter the github username of the engineer',
        when: (input) => input.type === 'engineer'
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter the school of the intern",
        when: (input) => input.type === 'intern'
    },
    
    


]
const startqs = () => {
    
    inquirer.prompt(questions).then(Answers => {
       
    console.log("Your responses: ", Answers)

    if (Answers.type === 'engineer' ) inquirer.prompt(questions.list)
    if (Answers.type === 'intern' ) inquirer.prompt(questions.list)
    if (Answers.type === 'finalize team') return

    }) 
}



const employeeQs = () => {

    inquirer.prompt(questionsEmployee).then(employeeAnswers => {
    console.log("Your responses: ", employeeAnswers)

    if (employeeAnswers.type === 'engineer' ) employeeQs()
    if (employeeAnswers.type === 'intern' ) employeeQs()
    if (employeeAnswers.type === 'finalize team') return
    });
}


startqs()