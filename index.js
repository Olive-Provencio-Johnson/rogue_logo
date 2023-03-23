const inquirer = require("inquirer");
const fs = require("fs");


// GIVEN a command-line application that accepts user input
// -----prompt for text = enter up to three characters
// -----prompt for text color = enter a color keyword (OR a hexadecimal number)
// -----prompt for logo shape = list of shapes to choose from: circle, triangle, and square
// -----prompt for the shape's color =  enter a color keyword (OR a hexadecimal number)

inquirer.prompt([
{
  type: 'input',
  name: 'logo characters',
  message: 'Please enter up to three characters for your logo',
},
{
    //how will this be processed in the terminal with basic input?
    type: 'input',
    name: 'text color',
    message: 'Please enter a color keyword or hexadecimal number to indicate your logo text color',
  },
  {
    type: 'list',
    name: 'logo shape',
    message: 'Please choose your logo shape from the list provided here',
    choices: ["Circle", "Triangle", "Square"], 
  },
  {
    //how will this be processed in the terminal with basic input?
    type: 'list',
    name: 'shape color',
    message: 'Please enter a color keyword or hexadecimal number to indicate your logo shape color',
    choices: ["Circle", "Triangle", "Square"], 
  },
]);


// SVG file is created named `logo.svg AND the output text "Generated logo.svg" is printed in the command line
fs.writeFile('logo.svg', data, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });




// **WHEN I open the `logo.svg` file in a browser
// ----THEN I am shown a 300x200 pixel image that matches the criteria I entered

// While not a requirement, it is recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class and use inheritance to reuse the code in the child classes.

// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
