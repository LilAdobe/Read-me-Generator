// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter Title',
            name: 'title'

        },
        {
            type: 'input',
            message: 'Enter Description',
            name: 'description'

        },
        {
            type: 'input',
            message: 'Write installation steps',
            name: 'installation'

        },
        {
            type: 'input',
            message: 'Enter usage',
            name: 'usage'

        },
        {
            type: 'checkbox',
            message: 'Choose your license',
            name: 'license',
            choices: ['bsd', 'licence2']

        },
        {
            type: 'input',
            message: 'enter contribution',
            name: 'contributing'

        },
        {
            type: 'input',
            message: 'enter test',
            name: 'test'

        },
        {
            type: 'input',
            message: 'enter your github',
            name: 'github'
        },
        {
            type: 'input',
            message: 'enter name',
            name: 'name'
        },
        {
            type: 'input',
            message: 'enter email',
            name: 'email'
        },
    ]).then(answers => {
        let something = generateMarkdown(answers)
        fs.writeFile('ReadMe1.md', something,
            (err) => {
                if (err) throw err;
            })
    }
    );

// TODO: Create a function to write README file
//function writeToFile()
//added code



// TODO: Create a function to initialize app
//function init() { }

// Function call to initialize app
//init()
