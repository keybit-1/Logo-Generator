const fs = require('fs');
const path = require('path');
const generateLogo = require('./Develop/lib/logoGenerator.js');

// Function to create the examples directory if it doesn't exist
function createExamplesDirectory() {
  const examplesDir = './Develop/examples';
  if (!fs.existsSync(examplesDir)) {
    fs.mkdirSync(examplesDir);
  }
}

// Function to generate and save example SVG files
async function generateAndSaveExamples() {
  try {
    const exampleConfigs = [
      { text: 'Example 1', textColor: 'black', shape: 'Triangle', shapeColor: 'blue' },
      { text: 'Example 2', textColor: 'white', shape: 'Circle', shapeColor: 'red' },
      // Add more example configurations as needed
    ];

    for (const config of exampleConfigs) {
      const exampleLogoSVG = await generateLogo(config);
      const fileName = `example_${config.shape}_${config.shapeColor}.svg`;
      const filePath = path.join(__dirname, 'Develop', 'examples', fileName);
      fs.writeFileSync(filePath, exampleLogoSVG);
      console.log(`Example saved to ${filePath}`);
    }
  } catch (error) {
    console.error('Error generating and saving examples:', error);
  }
}

// Function to write the logo to file and generate examples
async function writeLogoToFile() {
  try {
    // Generate the logo SVG string
    const logoSVG = await generateLogo();

    // Create the examples directory if it doesn't exist
    createExamplesDirectory();

    // Save the logo SVG
    fs.writeFileSync('./Develop/examples/logo.svg', logoSVG);
    console.log('Logo saved to logo.svg');

    // Generate and save example SVG files
    await generateAndSaveExamples();
  } catch (error) {
    console.error('Error writing the logo to file:', error);
  }
}

module.exports = writeLogoToFile;





