const { expect } = require('expect');
const Employee = require ('../lib/Employee.js');

test ('information', () => {
    const employee = new Employee ('Mark', '1', 'mark123@gmail.com');
    
    expect (employee.name).toBe('Mark');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('mark123@gmail.com');
})

test ('gets employee name', () => {
    const employee = new Employee ('', '1', 'mark123@gmail.com');

    expect(employee.name)
})