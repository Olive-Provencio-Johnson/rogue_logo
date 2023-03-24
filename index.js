const inquirer = require("inquirer");
const fs = require("fs");
const { Triagnle } = require("./lib/shapes");

// GIVEN a command-line application that accepts user input
// -----prompt for text = enter up to three characters
// -----prompt for text color = enter a color keyword (OR a hexadecimal number)
// -----prompt for logo shape = list of shapes to choose from: circle, triangle, and square
// -----prompt for the shape's color =  enter a color keyword (OR a hexadecimal number)

function run() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "logoCharacters",
        message: "Please enter up to three characters for your logo",
      },
      {
        type: "input",
        name: "textColor",
        message:
          "Please enter a color keyword or hexadecimal number to indicate your logo text color",
      },
      {
        type: "list",
        name: "logoShape",
        message: "Please choose your logo shape from the list provided here",
        choices: ["Circle", "Triangle", "Square"],
      },
      {
        type: "input",
        name: "shapeColor",
        message:
          "Please enter a color keyword or hexadecimal number to indicate your logo shape color",
      },
    ])
    .then((data) => {
      console.log(data);
      let shape;
      if (data.logoShape === "Triangle") {
        shape = new Triangle(
          data.textColor,
          data.logoCharacters,
          data.shapeColor,
        );
      } else if (data.logoShape === "Circle") {
        shape = new Circle(
            data.textColor,
            data.logoCharacters, 
            data.shapeColor,
        );
      } else if (data.logoShape === "Square") {
        shape = new Square(
            data.textColor,
            data.logoCharacters,
            data.shapeColor,
        );
      }
      console.log(shape);
      // SVG file is created named `logo.svg` AND the output text "Generated logo.svg" is printed in the command line
      fs.writeFile("logo.svg", shape.print(), (err) => {
        if (err) throw err;
        console.log("Generated logo.svg");
      });
    });
}

run();

// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
