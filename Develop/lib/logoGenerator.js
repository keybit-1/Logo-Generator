const { Triangle, Circle, Square } = require('./shapes.js');

function generateLogo(userInput) {
    let shape;
    switch (userInput.shape) {
        case 'Triangle':
            shape = new Triangle(userInput.shapeColor);
            break;
        case 'Circle':
            shape = new Circle(userInput.shapeColor);
            break;
        case 'Square':
            shape = new Square(userInput.shapeColor);
            break;
        default:
            throw new Error('Invalid shape selected');
    }

    return shape.render(userInput.text, userInput.textColor);
}

module.exports = generateLogo;





