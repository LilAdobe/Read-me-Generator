// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = 

inquirer
.prompt([
    {
        type: 'input',
        message: 'yes if test',
        name: 'test'

    },
    {
        type: 'input',
        message: 'yes if test1',
        name: 'test1'

    },
])
    .then((response) =>
        fs.writeFile('ReadMe.md', JSON.stringify
            (response), (err) => {
                if (err) console.log(err);
                console.log('its made');
            })
    );

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }
//added code



// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
