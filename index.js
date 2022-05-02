//packages
const inquirer = require ('inquirer');
const fs = require('fs');

//classes
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

//src js files
const template = require('./src/template');
const promptsFile = require('./src/prompts');

let role = promptsFile.role;
const{ employee, manager, engineer, intern, add } = promptsFile.prompts
const teamMembers =[];

//set prompt roles
function setPrompts(role){
    
    let prompts = [];

    switch (role) {
        case 'Manager':
            prompts = employee.concat(manager, add);
            break;
        
        case 'Engineer':
            prompts = employee.concat(engineer, add);
            break;
            
        case 'Intern':
            prompts = employee.concat(intern, add);
            break;
    
        default:
            break;
    }

    return prompts;
}

function generatePage(teamMembers) {
    let code = template.start;
    for (let i = 0; i < teamMembers.length; i++) {
        const member = teamMembers[i];
        if(member instanceof Manager) {
            code = code + template.managerProfile(member)
        } else if(member instanceof Engineer) {
            code = code + template.engineerProfile(member)
        } else if(member instanceof Intern) {
            code = code + template.internProfile(member)
        }
    }
    code = code + template.end;

    return code
}

function runPrompts() {
    inquirer
        .prompt(setPrompts(role))
        .then((data) => {
            const { memberName, id, email, officeNum, github, school, type } = data
            switch (role) {
                case 'Manager':
                    member = new Manager(memberName, id, email, officeNum);
                    break;
        
                case 'Engineer':
                    member = new Engineer(memberName, id, email, github);
                    break;
                
                case 'Intern':
                    member = new Intern(memberName, id, email, school);
                    break;
            
                default:
                    break;
            };
            teamMembers.push(member);

            if(!type.includes('done')) {
                role = type;
                runPrompts(role);
            } else {
                const html = generatePage(teamMembers);
                const filename = './dist/index.html';

                fs.writeFile(filename, html, (err) =>
                    err ? console.log(err) : console.log("Success! Look for your new page in the 'dist' folder :) ")
                );
            }
            
        });
}

// LOGIC
runPrompts();