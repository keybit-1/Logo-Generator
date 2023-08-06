class Shape {
  constructor(type, color) {
      this.type = type;
      this.color = color;
  }

  render() {
      throw new Error('render() method must be implemented in the subclass.');
  }
}

class Triangle extends Shape {
  constructor(color) {
      super('triangle', color);
      this.base = 300;
      this.height = 200;
  }

  render(text, textColor) {
      return `<svg height="${this.height}" width="${this.base}">
                  <polygon points="0,0 ${this.base},0 ${this.base / 2},${this.height}" style="fill:${this.color};" />
                  <text x="${this.base / 2}" y="${this.height / 2}" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text>
              </svg>`;
  }
}

class Circle extends Shape {
  constructor(color) {
      super('circle', color);
      this.radius = 100;
  }

  render(text, textColor) {
      return `<svg height="${this.radius * 2}" width="${this.radius * 2}">
                  <circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.color}" />
                  <text x="${this.radius}" y="${this.radius}" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text>
              </svg>`;
  }
}

class Square extends Shape {
  constructor(color) {
      super('square', color);
      this.side = 200;
  }

  render(text, textColor) {
      return `<svg height="${this.side}" width="${this.side}">
                  <rect width="${this.side}" height="${this.side}" style="fill:${this.color};" />
                  <text x="${this.side / 2}" y="${this.side / 2}" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text>
              </svg>`;
  }
}

module.exports = { Shape, Triangle, Circle, Square };

  
  
  