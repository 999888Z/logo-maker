const Shapes = require("./shapes");

class Circle extends Shapes {
  constructor(color) {
    super(color);
  }
  setColor(color) {
    return (this.color = color);
  }
  render() {
    return`<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.color}"/>`;
  }
}

module.exports = Circle;