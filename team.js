import inquirer from "inquirer"

const questionsManager = [
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
    }
]
const questionsEmployee = [
    {
        type: 'list',
        name: 'type',
        message: 'Please select the type of employee you want to add',
        choices: ['engineer', 'intern']
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the employee'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter the id of the employee'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the email of the employee'
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
    }

]