const { expect } = require('expect');
const Employee = require ('../lib/Employee.js');

test ('information', () => {
    const employee = new Employee ('Mark', '1', 'mark123@gmail.com');
    
    expect (employee.fullName).toBe('Mark');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('mark123@gmail.com');
})

test ('gets employee name', () => {
    const employee = new Employee ('Mark', '1', 'mark123@gmail.com');

    expect(employee.getName()).toBe('Mark');
})

test ('gets employee id', () => {
    const employee = new Employee ('Mark', '1', 'mark123@gmail.com');

    expect(employee.getId()).toBe('1');
})

test ('gets employee email', () => {
    const employee = new Employee ('Mark', '1', 'mark123@gmail.com');

    expect(employee.getEmail()).toBe('mark123@gmail.com');
})

test ('gets employee role', () =>{
    const employee = new Employee ('Mark', '1', 'mark123@gmail.com');
    
    expect(employee.getRole()).toEqual('Employee');
})