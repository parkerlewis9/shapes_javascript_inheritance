var Shape = require("./shape");

function Square(sideLength, color) {
  Shape.call(this, 4, color);
  this.sideLength = sideLength;
}
// TODO: Implement area, perimeter, draw and toString for Square.
// DO NOT reimplement getRGB.  That should only have to be done once.
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.area = function() {
	return this.sideLength * this.sideLength; 
};

Square.prototype.perimeter  = function() {
	return 4 * this.sideLength;
}

module.exports = Square;
