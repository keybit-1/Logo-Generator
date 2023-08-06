const getUserInput = require('./userInput.js');
const { Triangle, Circle, Square } = require('./shapes.js');

async function generateLogo() {
  // Get user input
  const userInput = await getUserInput();

  // Access the user's answers
  const text = userInput.text;
  const textColor = userInput.textColor;
  const shape = userInput.shape;
  const shapeColor = userInput.shapeColor;

  // Generate SVG based on the selected shape
  let svgString = '';
  switch (shape) {
    case 'Triangle':
      const triangle = new Triangle(shapeColor, 100, 80);
      svgString = triangle.render(text, textColor);
      break;
    case 'Circle':
      const circle = new Circle(shapeColor, 50);
      svgString = circle.render(text, textColor);
      break;
    case 'Square':
      const square = new Square(shapeColor, 120);
      svgString = square.render(text, textColor);
      break;
    default:
      throw new Error('Invalid shape selected.');
  }

  // Return the generated logo SVG string
  return svgString;
}

module.exports = generateLogo;



