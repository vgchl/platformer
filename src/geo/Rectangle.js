class Rectangle {

  constructor(topLeft, bottomRight) {
    this.topLeft = topLeft;
    this.bottomRight = bottomRight;
  }

  intersects(other) {
    return ! (this.bottomRight.x < other.topLeft.x ||
      other.bottomRight.x < this.topLeft.x ||
      this.bottomRight.y < other.topLeft.y ||
      other.bottomRight.y < this.topLeft.y);
  }

}

export default Rectangle;
