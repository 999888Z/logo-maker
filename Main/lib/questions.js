const fs = require("fs");

const inquirer = require("inquirer");

const Shapes = require("./shapes");

const Triangle = require("./triangle");

const Circle = require("./circle");

const Square = require("./square");

const LogoText = require("./logoText");

class PromptUser {
  constructor() {}

  run() {
    return inquirer

      .prompt([
        {
          type: "input",

          message:
            "Enter text for the logo. (Must not be more than 3 characters.)",

          name: "letters",

          validate: function (answer) {
            if (answer.length > 3) {
                return "Must not be more than 3 characters."
            }

            return true;
          }
        },

        {
          type: "input",

          message:
            "Enter a text color. (A color keyword or hexadecimal number)",

          name: "textColor",
        },

        {
          type: "list",

          message: "Choose a shape.",

          choices: ["Triangle", "Circle", "Square"],

          name: "shape",
        },

        {
          type: "input",

          message: "Enter a shape color.",

          name: "color",
        },
      ])

      .then((answers) => {
        let shapeColor = "";

        if (answers.shape === "Triangle") {
          const grabShape = new Shapes();

          const addColor = new Triangle(answers.color);

          shapeColor = grabShape.render() + addColor.render();
        } else if (answers.shape === "Circle") {
          const grabShape = new Shapes();

          const addColor = new Circle(answers.color);

          shapeColor = grabShape.render() + addColor.render();
        } else if (answers.shape === "Square") {
          const grabShape = new Shapes();

          const addColor = new Square(answers.color);

          shapeColor = grabShape.render() + addColor.render();
        }

        const addText = new LogoText(answers.letters, answers.textColor, answers.shape);

        const allData = shapeColor + addText.render();

        fs.writeFile("./Main/examples/logo.svg", allData, (err) =>
          err ? console.error(err) : console.log("Generated logo.svg")
        );
      })

      .catch((err) => console.error(err));
  }
}

module.exports = PromptUser;
