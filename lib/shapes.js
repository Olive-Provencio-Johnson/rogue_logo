class Shapes {
    constructor(textColor, logoCharacters, shapeColor) {
        this.textColor = textColor; 
        this.logoCharacters = logoCharacters; 
        this.shapeColor = shapeColor;
    }

}

// **WHEN I open the `logo.svg` file in a browser
// ----THEN I am shown a 300x200 pixel image that matches the criteria I entered

class Triangle extends Shapes {
    constructor (textColor, logoCharacters, shapeColor) {
        super(textColor, logoCharacters, shapeColor)
    }
    print() {
        return `<svg height="300" width="200">
        <polygon points="200,300 100,0 0,300" style="fill:${this.shapeColor}" />
        <text x="100" y="175" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.logoCharacters}</text>
      </svg>`
    };
};

class Circle extends Shapes {
    constructor (textColor, logoCharacters, shapeColor) {
        super(textColor, logoCharacters, shapeColor)
    }
    print() {
        return `<svg height="300" width="200">
        <circle cx="100" cy="100" r="99" stroke="none" stroke-width="0" fill="${this.shapeColor}" />
        <text x="100" y="110" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoCharacters}</text> 
      </svg>`
    };
};

class Square extends Shapes {
    constructor (textColor, logoCharacters, shapeColor) {
        super(textColor, logoCharacters, shapeColor)
    }
    print() {
        return `<svg width="300" height="200">
        <rect width="200" height="200" style="fill:${this.shapeColor}" />
        <text x="100" y="120" font-size="75" text-anchor="middle" fill="${this.textColor}">${this.logoCharacters}</text>   
      </svg>`
    };
};

module.exports = { Triangle, Circle, Square }