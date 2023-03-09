const Shapes = require("./shapes");

class Square extends Shapes {
  constructor(color) {
    super(color);
  }
  setColor(color) {
    return (this.color = color);
  }
  render() {
    return`<rect x="20" y="20" width="110" height="110" fill="${this.color}"/>`;
  }
}

module.exports = Square;