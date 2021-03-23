class Position {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  translate(x, y) {
    this.x += x;
    this.y += y;
    return this;
  }

  clone() {
    return new Position(this.x, this.y)
  }
}

export default Position;
