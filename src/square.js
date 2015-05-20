var Shape = require("./shape");

function Square(sideLength, color) {
  Shape.call(this, 4, color);
  this.sideLength = sideLength;
}

// TODO: Implement area, perimeter, draw and toString for Square.
// DO NOT reimplement getRGB.  That should only have to be done once.
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

module.exports = Square;

var square = new Square(2, "red");
console.log(square.area())