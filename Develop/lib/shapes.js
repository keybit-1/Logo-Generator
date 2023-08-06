class Shape {
    constructor(type, color) {
      this.type = type;
      this.color = color;
    }
  
    render(text, textColor) {
      throw new Error('render() method must be implemented in the subclass.');
    }
  }
  
  class Triangle extends Shape {
    constructor(color, base, height) {
      super('triangle', color);
      this.base = base;
      this.height = height;
    }
  
    render(text, textColor) {
      return `<svg height="${this.height}" width="${this.base}">
                <polygon points="0,0 ${this.base},0 ${this.base / 2},${this.height}" style="fill:${this.color};" />
                <text x="10" y="20" fill="${textColor}">${text}</text>
              </svg>`;
    }
  }
  
  class Circle extends Shape {
    constructor(color, radius) {
      super('circle', color);
      this.radius = radius;
    }
  
    render(text, textColor) {
      return `<svg height="${this.radius * 2}" width="${this.radius * 2}">
                <circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.color}" />
                <text x="10" y="20" fill="${textColor}">${text}</text>
              </svg>`;
    }
  }
  
  class Square extends Shape {
    constructor(color, side) {
      super('square', color);
      this.side = side;
    }
  
    render(text, textColor) {
      return `<svg height="${this.side}" width="${this.side}">
                <rect width="${this.side}" height="${this.side}" style="fill:${this.color};" />
                <text x="10" y="20" fill="${textColor}">${text}</text>
              </svg>`;
    }
  }
  
  module.exports = { Shape, Triangle, Circle, Square };
  
  
  