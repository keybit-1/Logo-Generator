const inquirer = require('inquirer');

async function getUserInput() {
  const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter the text for the logo:',
      validate: () => true, // Always returns true to proceed to the next question
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (e.g., red, #00ff00, etc.):',
      validate: () => true,
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for the logo:',
      choices: ['Triangle', 'Circle', 'Square'],
      validate: () => true,
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (e.g., blue, #ff0000, etc.):',
      validate: () => true,
    },
  ];

  const answers = await inquirer.prompt(questions);

  return answers;
}

module.exports = getUserInput;





