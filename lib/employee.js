// constructor for employee
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    retName () {
        return this.name;
    }
    retId () {
        return this.id;
    }
    retEmail () {
        return this.email;
    }
    retType () {
        return 'employee';
    }
};

export default Employee;