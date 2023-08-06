const inquirer = require('inquirer');

// Helper function to validate color input
function validateColor(input) {
  const colorKeywordRegex = /^[a-zA-Z]+$/;
  const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return colorKeywordRegex.test(input) || hexColorRegex.test(input) || "Please enter a valid color keyword or hexadecimal number.";
}

async function getUserInput() {
  const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter the text for the logo (max 3 characters):',
      validate: input => input.length <= 3 || "Text should be a maximum of 3 characters.",
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (e.g., red, #00ff00, etc.):',
      validate: validateColor,
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for the logo:',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (e.g., blue, #ff0000, etc.):',
      validate: validateColor,
    },
  ];

  const answers = await inquirer.prompt(questions);

  return answers;
}

module.exports = getUserInput;






