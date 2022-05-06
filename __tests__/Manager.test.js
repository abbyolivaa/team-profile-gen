const Manager = require('../lib/Manager');

test("gets manager's info", () => {
    const manager = new Manager ('Ana', '2', 'ana123@gmail.com','311')

    expect(manager.fullName).toBe('Ana');
    expect(manager.id).toBe('2');
    expect(manager.email).toBe('ana123@gmail.com');
    expect(manager.officeNum).toEqual('311');
})

test ('get role', () => {
    const manager = new Manager ('Ana', '2', 'ana123@gmail.com','311')

    expect(manager.getRole()).toBe ('Manager')
})
