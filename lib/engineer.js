import Employee from "../lib/employee.js";

class Engineer extends Employee {

    constructor(name, id, email, gitHub){
        super (name, id, email)
        this.gitHub = gitHub
    }
    getGithub () {
        return this.gitHub
    }
    getRole () {
        return 'engineer';
    }

}

export default Engineer;