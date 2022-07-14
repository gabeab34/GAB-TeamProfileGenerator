import Employee from "../lib/employee.js";

class Intern extends Employee {

    constructor(name, id, email, school){
        super (name, id, email)
        this.school = school
    }
    getSchool () {
        return this.school
    }
    getRole () {
        return 'intern';
    }

}

export default Intern;