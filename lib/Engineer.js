const Employee = require ('./Employee')

class Engineer extends Employee {
    constructor (fullName ='', id, email='',github) {
        super(fullName, id, email)

        this.role = 'Engineer'
        this.github = github
    }

    getRole() {
        return this.role
    }

    getGithub() {
        return this.github
    }
}
module.exports = Engineer