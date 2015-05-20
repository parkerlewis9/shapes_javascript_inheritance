var Square = require("../src/square");

var square;
var square2;

describe("Square", function() {
  beforeEach(function() {
    square = new Square(2, "red");
    square2 = new Square(0, "red");
  });

  describe("Area", function() {
    it("should be 4 for a square", function() {
      expect(square.area()).toEqual(4);
    });

    it("should be 0 for square2", function() {
      expect(square2.area()).toEqual(0);
    });
  });

  describe("Perimeter", function() {
    it("should be 8 for a square with side length 2", function() {
      expect(square.perimeter()).toEqual(8);
    });
    it("should be 0 for square2", function() {
      expect(square2.perimeter()).toEqual(0);
    })
  });


  // Write more specs!!
});
