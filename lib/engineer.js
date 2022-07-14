import Employee from "../lib/employee.js";

class Engineer extends Employee {

    constructor(name, id, email, github){
        super (name, id, email)
        this.github = github
    }
    retGithub () {
        return this.github
    }
    retType () {
        return 'engineer';
    }

}

export default Engineer;