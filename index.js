// TODO: Include packages needed for this aplication
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { generate } = require("rxjs");

// TODO: Create an array of questions for user input

const questions = [

    //Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            else {
                console.log('Please enter the title of your project');
                return false;
            }
        }
    },


    //Description
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter describe your project.');
                return false;
            }
        }

    },

    //Instalation
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps to install your project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please describe the installation steps for your users.');
                return false;
            }
        }

    },
    //Usage 
    {
        type: 'input',
        name: 'usage',
        message: 'Give instructions for how to use your project.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide instructions for how to use your project.');
                return false;
            }
        }
    },
    //Collaboration
    {
        type: 'input',
        name: 'collaboration',
        message: 'List anyone who was a collaborator, if none skip',

    },
    //License
    {
        type: 'list',
        name: 'license',
        choices: ['Apache', 'GNU', 'ISC', 'MIT', 'Mozilla', 'Open', 'None'],
    },

    //Contributing
    {
        type: 'input',
        name: 'contributing',
        message: 'Set guidelines for contributing to your app/project. If you do not want people to contribute skip this step ',
    },
    //Tests
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be used to run tests?',
    },

    //Features
    {
        type: 'input',
        name: 'features',
        message: 'List project features and languages used'
    },
    //github
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide your GitHub username.');
                return false;
            }
        }
    },
    //email
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide your email address.');
                return false;
            }
        }
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    return fs.writeFileSync(fileName, data)
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(data => {

            console.log("Genarate Readme");

            writeToFile("README.md", generateMarkdown(data));
        })
}

// Function call to initialize app
init();
