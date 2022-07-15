import fs from 'fs'
function makehtml() {
    fs.writeFile('./index.html', teamsite, err=>{if(err) console.log("Couldn't generate your team page :(")});
}
let teamsite = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./dist/style.css">
    <title> Team Generator </title>
</head>
<body>
<nav><h1> The Team </h1></nav>
<main>
<div id = "team"> 
`

const genHTML = roles => {
    roles.Manager.forEach(obj => {
        teamsite+= 
    `<div class="card">
        <div class="position">
        <h2>${obj.name}</h2>
        <h3>${obj.getRole()}</h3>
        </div>
        <ul>
            <li>ID: ${obj.id}</li>
            <li>Email: <a href="mailto:${obj.email}">${obj.email}</a></li>
            <li>Office Number: ${obj.officeNumber}</li>
        </ul>
    </div>`
    })
    roles.Engineers.forEach(obj => {
        teamsite+= 
    `<div class="card">
        <div class="position">
        <h2>${obj.name}</h2>
        <h3>${obj.getRole()}</h3>
        </div>
        <ul>
            <li>ID: ${obj.id}</li>
            <li>Email: <a href="mailto:${obj.email}">${obj.email}</a></li>
            <li>GitHub: <a href="https://www.github.com/${obj.gitHub}" target="_blank" rel="noopener noreferrer">${obj.gitHub}</li></a>
        </ul>
    </div>`
    })
    roles.Interns.forEach(obj => {
        teamsite+=  
    `<div class="card">
        <div class="position">
        <h2>${obj.name}</h2>
        <h3>${obj.getRole()}</h3>
        </div>
        <ul>
            <li>ID: ${obj.id}</li>
            <li>Email: <a href="mailto:${obj.email}">${obj.email}</a></li>
            <li>School: ${obj.school}</li>
        </ul>
    </div>`
    })
    teamsite+= `
    </div>
</main> 
    
</body>
</html>
    
    
    `
 makehtml()
}

export default genHTML;