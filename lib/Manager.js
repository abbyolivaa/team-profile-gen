const Employee = require ('./Employee')

class Manager extends Employee {
    constructor (fullName ='', id, email='',officeNum) {
        super(fullName, id, email)

        this.officeNum = officeNum
        this.role = 'Manager'
    }

    getRole() {
        return this.role
    }
}
module.exports = Manager