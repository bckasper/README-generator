// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What does the user need to install to use this application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide a brief description of how the user uses this application.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use for this application?',
        choices: ['None', 'MIT License', 'ISC License', 'GNU GPLv3']
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributors of this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide a sample criteria for testing the application.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide an email address a user can reach you at for questions.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your Github username.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
