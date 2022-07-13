import Employee from "../../../GAB-TeamProfileGenerator-C10/lib/employee";

class Manager extends Employee {

    constructor(name, id, email, office){
        super (name, id, email)
        this.office = office
    }
    retOffice () {
        return this.office
    }
    retType () {
        return 'manager';
    }

}

export default Manager;