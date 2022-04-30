const Engineer = require('../lib/Engineer')

test ('engineer info', () => {
    const engineer = new Engineer('Quin', '3', 'quin12@gmail.com')

    expect(engineer.name).toBe('Quin');
    expect(engineer.id).toBe('3');
    expect(engineer.email).toBe('quin12@gmail.com');
})

test("gets engineer's github username", () => {
    const engineer = new Engineer('Quin', '3', 'quin12@gmail.com', 'quin12');
    
    expect(engineer.github).toBe('quin12');
    expect(engineer.getGithub()).toBe('quin12')

})



//test('gets github info')

//test ('gets role')