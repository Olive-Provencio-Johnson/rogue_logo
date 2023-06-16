const { Triangle, Circle, Square } = require("./shapes");

describe('Triangle', () => {
    test('should render a triangle with the correct color, size, and logo characters', () => {
      const triangle = new Triangle('#ffffff', 'ABC', '#000000');
      const svg = triangle.print();
      expect(svg).toContain('<svg height="300" width="200">');
      expect(svg).toContain('<polygon points="200,300 100,0 0,300" style="fill:#000000" />');
      expect(svg).toContain('<text x="100" y="175" font-size="40" text-anchor="middle" fill="#ffffff">ABC</text>');
    });
  });
  
  describe('Circle', () => {
    test('should render a circle with the correct color, size, and logo characters', () => {
      const circle = new Circle('#ffffff', 'XYZ', '#ff0000');
      const svg = circle.print();
      expect(svg).toContain('<svg height="300" width="200">');
      expect(svg).toContain('<circle cx="100" cy="100" r="99" stroke="none" stroke-width="0" fill="#ff0000" />');
      expect(svg).toContain('<text x="100" y="110" font-size="60" text-anchor="middle" fill="#ffffff">XYZ</text>');
    });
  });
  
  describe('Square', () => {
    test('should render a square with the correct color, size, and logo characters', () => {
      const square = new Square('#ffffff', '123', '#008000');
      const svg = square.print();
      expect(svg).toContain('<svg width="300" height="200">');
      expect(svg).toContain('<rect width="200" height="200" style="fill:#008000" />');
      expect(svg).toContain('<text x="100" y="120" font-size="75" text-anchor="middle" fill="#ffffff">123</text>');
    });
  });
