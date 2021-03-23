import Rectangle from '../geo/Rectangle.js';

class Blob {

  health = 1;

  constructor(position) {
    this.position = position;
  }

  update(dt) {
    if (this.health > 0) {
      this.position.x += 100 * dt;
    } else {
      this.position.y += 200 * dt;
    }
  }

  render = (camera) => {
    camera.renderArt('blob', this.position.x, this.position.y);
  };

  get boundingBox() {
    return new Rectangle(this.position.clone(), this.position.clone().translate(47, 47));
  }

  die() {
    this.health = 0;
    this.speed = 0;
  }

}

export default Blob;
