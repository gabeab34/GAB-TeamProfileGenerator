import Employee from "../../../GAB-TeamProfileGenerator-C10/lib/employee";

class Intern extends Employee {

    constructor(name, id, email, school){
        super (name, id, email)
        this.school = school
    }
    retSchool () {
        return this.school
    }
    retType () {
        return 'intern';
    }

}

export default Intern;