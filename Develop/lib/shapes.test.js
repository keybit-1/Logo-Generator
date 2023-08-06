const { Triangle, Circle, Square } = require('./shapes.js');

describe('Shape classes', () => {
  test('Triangle render() method should return the correct SVG string', () => {
    const triangle = new Triangle('blue', 100, 80);
    const svgString = triangle.render();
    const expectedSVG = `<svg height="80" width="100"><polygon points="0,0 100,0 50,80" style="fill:blue;" /></svg>`;
    expect(svgString).toBe(expectedSVG);
  });

  test('Circle render() method should return the correct SVG string', () => {
    const circle = new Circle('red', 50);
    const svgString = circle.render();
    const expectedSVG = `<svg height="100" width="100"><circle cx="50" cy="50" r="50" fill="red" /></svg>`;
    expect(svgString).toBe(expectedSVG);
  });

  test('Square render() method should return the correct SVG string', () => {
    const square = new Square('green', 120);
    const svgString = square.render();
    const expectedSVG = `<svg height="120" width="120"><rect width="120" height="120" style="fill:green;" /></svg>`;
    expect(svgString).toBe(expectedSVG);
  });

  // Add more tests as needed for additional scenarios or edge cases.
});


