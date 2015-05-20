var Shape = require("../src/shape");
console.log(Shape);

var shape;
shape = new Shape(1,"red");
console.log(shape.color);

describe("Shape", function() {
  beforeEach(function() {
    shape = new Shape(1, "red");
  });

  describe("Area", function() {
    it("should should be 0 for this abstract shape", function() {
      expect(shape.area()).toEqual(0);
    });
  });

  describe("RGB", function() {
    it("should return correct rgb color", function() {
      expect(shape.getRGB()).toEqual("rgb(225,0,0)");
    });
  });

   describe("RGB", function() {
    it("should return correct rgb color", function() {
    	shape = new Shape(1,"green")
      expect(shape.getRGB()).toEqual("rgb(0,225,0)");
    });
  });
  // Write more specs!!
});
