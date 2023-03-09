const Triangle = require("./triangle")
const Circle = require("./circle")
const Square = require("./square")

describe('Triangle', () => {
    it('should render a blue triangle', () => {
      const shape = new Triangle();
      shape.setColor("blue");

      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });

  describe('Circle', () => {
    it('should render a blue circle', () => {
      const shape = new Circle();
      shape.setColor("blue");

      expect(shape.render()).toEqual(`<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="blue"/>`);
    });
  });

  describe('Square', () => {
    it('should render a blue square', () => {
      const shape = new Square();
      shape.setColor("blue");

      expect(shape.render()).toEqual(`<rect x="20" y="20" width="110" height="110" fill="blue"/>`);
    });
  });


