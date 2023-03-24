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
    triangleSVG() {
        return `<svg height="300" width="200">
        <polygon points="200,300 100,0 0,300" style="fill:${this.shapeColor}" />
        <text x="100" y="175" font-size="40" text-anchor="middle" fill="${this.textColor}">${logoCharacters}</text>
      </svg>`
    };
}