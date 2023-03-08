const fs = require('fs');

class Shapes  {
    constructor(shape, setColor, text, textColor) {
        this.shape = shape
        this.setColor = setColor
       
        if (shape === "Triangle") {
            
            const newTriangle = (
                `<svg width = "300" height = "200">
             
                <text x="24" y="80" font-size="30" font-family="Arial" fill="${textColor}">${text}</text>
          </svg>`)
          fs.writeFile('./Main/examples/logo.svg', newTriangle, (err) =>
                 err ? console.error(err) : console.log('Generated logo.svg')
               );
            
          
            
        } else if (shape === "Circle") {
            const newCircle = (
                `<svg width = "300" height = "200">
                <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${setColor}"/>
                <text x="24" y="60" font-size="30" font-family="Arial" fill="${textColor}">${text}</text>
          </svg>`)
          fs.writeFile('./Main/examples/logo.svg', newCircle, (err) =>
                 err ? console.error(err) : console.log('Generated logo.svg')
               );
        }
        else if (shape === "Square") {
            const newSquare = (
                `<svg width = "300" height = "200">
                <rect x="20" y="20" width="110" height="110" fill="${setColor}"/>
                <text x="40" y="90" font-size="40" font-family="Arial" fill="${textColor}">${text}</text>
          </svg>`)
          fs.writeFile('./Main/examples/logo.svg', newSquare, (err) =>
                 err ? console.error(err) : console.log('Generated logo.svg')
               );
        }}}
        
        
        class Circle extends Shapes {
            
            render() {
                return `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${setColor}"/>`;
    }}
    
    class Square extends Shapes {
            
        render() {
            return `<rect x="20" y="20" width="110" height="110" fill="${color}"/>`;
}}

    
    
   



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


        

module.exports = Shapes;