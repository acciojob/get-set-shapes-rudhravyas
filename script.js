// Rectangle class
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Getter for width
  get width() {
    return this.width;
  }

  // Getter for height
  get height() {
    return this.height;
  }

  // Method to calculate area
  getArea() {
    return this.width * this.height;
  }
}

// Square class (inherits from Rectangle)
class Square extends Rectangle {
  constructor(side) {
    // Call Rectangle constructor with same value for width and height
    super(side, side);
  }

  // Method to calculate perimeter
  getPerimeter() {
    return this.width * 4;
  }
}

// Expose classes to Cypress
window.Rectangle = Rectangle;
window.Square = Square;
