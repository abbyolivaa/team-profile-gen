const Manager = require('../lib/Manager');

test("gets manager's info", () => {
    const manager = new Manager ('Ana', '2', 'ana123@gmail.com')

    expect(manager.name).toBe('Ana')
    expect(manager.id).toBe('2')
    expect(manager.email).toBe('ana123@gmail.com')
})

test ("gets manager's office number")

