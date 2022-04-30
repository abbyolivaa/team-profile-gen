const Intern = require('../lib/Intern')

test("get instructor's school", () => {
    const intern = new Intern ('Tom','4', 'tom123@gmail.com','Carolina University');

    expect(intern.school).toBe('Carolina University');
    expect(intern.getSchool()).toBe('Carolina University');
}) 