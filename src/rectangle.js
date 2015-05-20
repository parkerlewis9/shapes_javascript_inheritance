var Shape = require("./shape");

// Add the constructor for rectangle and the methods that
// need to be overwritten.  Keep in mind that a rectangle
// has more than just 1 side length.
function Rectangle(sideLengthOne, sideLengthTwo, color) { // TODO: THIS IS JUST A PLACE HOLDER, PLEASE CHANGE.
	Shape.call(this, 4, color);
	this.sideLengthOne = sideLengthOne;
	this.sideLengthTwo = sideLengthTwo;
}

Rectangle.prototype.area = function() {
	return this.sideLengthTwo * this.sideLengthOne;
}

Rectangle.prototype.perimeter = function() {
	return (2 * this.sideLengthOne) + (2 * this.sideLengthTwo);
}

module.exports = Rectangle;
