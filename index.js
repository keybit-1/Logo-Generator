const getUserInput = require('./Develop/lib/userInput.js');
const generateLogo = require('./Develop/lib/logoGenerator.js');
const writeLogoToFile = require('./fileWriter.js');

async function runLogoGenerator() {
  try {
    // Prompt the user and get the input
    const userInput = await getUserInput();

    // Generate the logo SVG string based on user input
    const logoSVG = await generateLogo(userInput);

    // Save the logo SVG to a file
    await writeLogoToFile(logoSVG);

    console.log('Logo generation and saving complete.');
  } catch (error) {
    console.error('Error:', error);
  }
}

runLogoGenerator();
