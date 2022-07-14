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
        choices: ['engineer', 'intern']
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the employee',
        

    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter the id of the employee',
        
        
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the email of the employee',
        
        
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
    {
        type: 'list',
        name: 'confirm',
        message: 'Do you want to add another employee?',
        choices: ['yes', 'no (finalize team)']

    }

]



const roles = {Manager:[],Engineers:[],Interns:[]};

const startQs = () => {
    
    inquirer.prompt(questionsManager).then(managerAnswers => {
       
    console.log("Your responses: ", managerAnswers)

    roles.Manager.push(new Manager(managerAnswers.name,managerAnswers.id,managerAnswers.email,managerAnswers.office))


    employeeQs()

    }) 
}



const employeeQs = () => {

    inquirer.prompt(questionsEmployee).then(employeeAnswers => {
    console.log("Your responses: ", employeeAnswers)
        roles.Engineers.push(new Engineer(employeeAnswers.name,employeeAnswers.id,employeeAnswers.email,employeeAnswers.github))
        roles.Interns.push(new Intern(employeeAnswers.name,employeeAnswers.id,employeeAnswers.email,employeeAnswers.school))
    if (employeeAnswers.confirm === 'yes' ) employeeQs()

    if (employeeAnswers.confirm === 'no (finalize team)' ) return genHTML(roles)
       
   

    });
}


startQs()
export default roles;