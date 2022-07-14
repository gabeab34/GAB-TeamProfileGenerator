import inquirer from "inquirer"

import Engineer from "./lib/engineer.js"
import Intern from "./lib/intern.js"
import Manager from "./lib/manager.js"

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
    },
]

const questionsEmployee = [
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



const roles = {Manager:[],Engineers:[],Interns:[]};

const startQs = () => {
    
    inquirer.prompt(questionsManager).then(managerAnswers => {
       
    console.log("Your responses: ", managerAnswers)

    managerAnswers == 'manager'
    roles.Manager.push(new Manager(managerAnswers.name,managerAnswers.id,managerAnswers.email,managerAnswers.office))


    employeeQs()

    }) 
}



const employeeQs = () => {

    inquirer.prompt(questionsEmployee).then(employeeAnswers => {
    console.log("Your responses: ", employeeAnswers)

    if (employeeAnswers.type === 'engineer' ) employeeQs()
    if (employeeAnswers.type === 'intern' ) employeeQs()
    if (employeeAnswers.type === 'finalize team') return genHTML(roles)

    employeeAnswers.type === 'engineer'
    roles.Engineers.push(new Engineer(employeeAnswers.engineername,employeeAnswers.engineerid,employeeAnswers.engineeremail,employeeAnswers.github))
    employeeAnswers.type === 'intern'
    roles.Interns.push(new Intern(employeeAnswers.internname,employeeAnswers.internid,employeeAnswers.internemail,employeeAnswers.school))

    });
}


startQs()