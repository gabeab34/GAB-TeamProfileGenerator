import inquirer from "inquirer"
import Engineer from "./lib/engineer.js"
import Intern from "./lib/intern.js"
import Manager from "./lib/manager.js"
import genHTML from "./src/genHTML.js"

const roles = {Manager:[],Engineers:[],Interns:[]};
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
        name: 'officeNumber',
        message: 'Please enter the office number of the team manager:'
    },
]

const questionsEmployee = [
    {
        type: 'list',
        name: 'role',
        message: 'Please select the type of employee you want to add',
        choices: ['Engineer', 'Intern']
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
        when: (input) => input.role === 'Engineer'
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter the school of the intern",
        when: (input) => input.role === 'Intern'
    },
    {
        type: 'list',
        name: 'confirm',
        message: 'Do you want to add another employee?',
        choices: ['yes', 'no (finalize team)']
    }

]

const startQs = () => { 
    inquirer.prompt(questionsManager).then(managerAnswers => {
       roles.Manager.push(new Manager(managerAnswers.name,managerAnswers.id,managerAnswers.email,managerAnswers.officeNumber))
        employeeQs()
    }) 
}

const employeeQs = () => {
    inquirer.prompt(questionsEmployee).then(employeeAnswers => {
    if (employeeAnswers.role === 'Engineer')
        roles.Engineers.push(new Engineer(employeeAnswers.name,employeeAnswers.id,employeeAnswers.email,employeeAnswers.github))
    if (employeeAnswers.role === 'Intern')    
        roles.Interns.push(new Intern(employeeAnswers.name,employeeAnswers.id,employeeAnswers.email,employeeAnswers.school))
    if (employeeAnswers.confirm === 'yes' ) 
        employeeQs()
    else if (employeeAnswers.confirm === 'no (finalize team)' ) 
        return genHTML(roles)
    });
}



startQs()
export default roles;