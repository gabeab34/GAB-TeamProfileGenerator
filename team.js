import inquirer from "inquirer"

// import Engineer from "./lib/engineer"
// import Intern from "./lib/intern"
// import Manager from "./lib/manager"

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
        choices: ['engineer', 'intern', 'none']
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
async function managerQs() {
    
    const managerAnswers = await inquirer.prompt(questionsManager);
    console.log("Your responses: ", managerAnswers);

    employeeQs()

    
}


async function employeeQs() {

    const employeeAnswers = await inquirer.prompt(questionsEmployee);
    console.log("Your responses: ", employeeAnswers)

    if (employeeAnswers.type === "engineer" ) employeeQs()
    if (employeeAnswers.type === "intern" ) employeeQs()
    if (employeeAnswers.type === "none") return
}



managerQs()