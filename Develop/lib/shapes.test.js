const { Triangle, Circle, Square } = require('./shapes.js');

describe('Triangle class', () => {
    test('should generate correct SVG for blue triangle', () => {
        const triangle = new Triangle('blue');
        const expectedSVG = 
            `<svg height="200" width="300">
                  <polygon points="0,0 300,0 150,200" style="fill:blue;" />
                  <text x="150" y="100" fill="undefined" text-anchor="middle" alignment-baseline="middle">undefined</text>
              </svg>`;
        expect(triangle.render().trim()).toEqual(expectedSVG.trim());
    });
});

describe('Circle class', () => {
    test('should generate correct SVG for red circle', () => {
        const circle = new Circle('red');
        const expectedSVG = 
            `<svg height="200" width="200">
                  <circle cx="100" cy="100" r="100" fill="red" />
                  <text x="100" y="100" fill="undefined" text-anchor="middle" alignment-baseline="middle">undefined</text>
              </svg>`;
        expect(circle.render().trim()).toEqual(expectedSVG.trim());
    });
});

describe('Square class', () => {
    test('should generate correct SVG for green square', () => {
        const square = new Square('green');
        const expectedSVG = 
            `<svg height="200" width="200">
                  <rect width="200" height="200" style="fill:green;" />
                  <text x="100" y="100" fill="undefined" text-anchor="middle" alignment-baseline="middle">undefined</text>
              </svg>`;
        expect(square.render().trim()).toEqual(expectedSVG.trim());
    });
});









