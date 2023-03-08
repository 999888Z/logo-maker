const Shapes = require('./shapes')
const inquirer = require('inquirer');

class PromptUser   {
    constructor() {
        // this.answers = [];
    }
    run() {
    return inquirer.prompt([
    {
        type: 'input',
        message: 'Enter text for the logo. (Must not be more than 3 characters.)',
        name: 'letters'
    },
    {
        type: 'input',
        message: 'Enter a text color. (A color keyword or hexadecimal number)',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'Choose a shape.',
        choices: ["Triangle", "Circle", "Square"], 
        name: 'shape'
    },
    {
        type: 'input',
        message: 'Enter a shape color.',
        name: 'shapeColor'
    },
])


     
      .then((answers) => {
   
        const shapeChoice = new Shapes(answers.shape, answers.shapeColor, answers.letters, answers.textColor)
    })
     

      .catch((err) => console.error(err));
  
}}

module.exports = PromptUser;