const Employee = require ('./Employee')

class Intern extends Employee {
    constructor (fullName ='', id, email='',school) {
        super(fullName, id, email)

        this.role = 'Intern'
        this.school = school
    }

    getRole() {
        return this.role
    }
    
    getSchool() {
        return this.school
    }
}
module.exports = Intern