const role = 'Manager'
console.log(`
======================
First add your manager
======================
`);
const prompts = {
    employee:[
        {   
            type:'input',
            name: 'memberName',
            message: "What is the employee's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else{
                    console.log("Please enter the employee's name!");
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'id',
            message:"Please enter the employee's ID",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else{
                    console.log("Please enter the employee's ID!");
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'email',
            message:"What is the employee's email address? (optional)"
        }
    ],

    engineer: [
        {
            type:'input',
            name:'github',
            message:"Please enter the Engineer's GitHub username",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else{
                    console.log("Please enter the Engineer's GitHub username!");
                    return false;
                }
            }
                
        }
    ],

    manager: [
        {
            type:'input',
            name:'officeNum',
            message:"Please enter the Manager's office number",
            validate: officeNumInput => {
                if (officeNumInput) {
                    return true;
                } else{
                    console.log("Please enter the Manager's ID!");
                    return false;
                }
            }
        }
    ],

    intern: [
        {
            type:'input',
            name:'school',
            message:"Please enter the Intern's school name",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else{
                    console.log("Please enter the Intern's school name!");
                    return false;
                }
            }
                
        }
    ],

    add: [
        {
            type: 'list',
            name: 'type',
            message: 'Select another type of team member to add:',
            choices: ['Engineer', 'Intern', "I am done adding team members"]
        }
    ]

}

module.exports = {prompts, role};