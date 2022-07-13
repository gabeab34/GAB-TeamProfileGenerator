import Employee from "../../../GAB-TeamProfileGenerator-C10/lib/employee";

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