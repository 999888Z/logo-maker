const fs = require("fs");

class Shapes {
  constructor(shape, setColor, text, textColor) {
    this.shape = shape;
    this.setColor = setColor;
  }

  render() {
    if (shape === "Triangle") {
      const shape = new Triangle(setColor);
      return`<svg width = "300" height = "200"> </svg>` + shape;
    } else if (shape === "Circle") {
      return`<svg width = "300" height = "200"> </svg>`;
    } else if (shape === "Square") {
      const newSquare = `<svg width = "300" height = "200"></svg>`;
                
          
      
    }
  }
}

class Triangle extends Shapes {
  constructor(setColor) {
    super(setColor);
    console.log(setColor)
  }
  
  
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.setColor}" />`;
  }
}

class Circle extends Shapes {
  render() {
    return `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${setColor}"/>`;
  }
}

class Square extends Shapes {
  render() {
    return `<rect x="20" y="20" width="110" height="110" fill="${setColor}"/>`;
  }
}

//     class Circle {
//         constructor(color) {

// {/* <circle cx="25" cy="75" r="20" fill= "green"/> */}

//     }

//     }
//     class Square {
//         constructor(color) {

// {/* <rect x="10" y="10" width="30" height="30"/> */}
//     }

//     }

(module.exports = Shapes), Triangle;

// <text x="24" y="80" font-size="30" font-family="Arial" fill="${textColor}">${text}</text>

//   fs.writeFile('./Main/examples/logo.svg', newTriangle, (err) =>
//          err ? console.error(err) : console.log('Generated logo.svg')
//        );
