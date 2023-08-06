const fs = require('fs');
const generateLogo = require('./Develop/lib/logoGenerator.js');
const getUserInput = require('./Develop/lib/userInput.js');

// Function to write the logo to file
async function writeLogoToFile() {
    try {
        // Get user input
        const userInput = await getUserInput();
        
        // Generate the logo SVG string
        const logoSVG = generateLogo(userInput);

        // Save the logo SVG
        fs.writeFileSync('./Develop/examples/logo.svg', logoSVG);
        console.log('Generated logo.svg');
        
    } catch (error) {
        console.error('Error writing the logo to file:', error);
    }
}

module.exports = writeLogoToFile;






