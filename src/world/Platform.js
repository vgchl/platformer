import Rectangle from '../geo/Rectangle.js';

class Platform {

  constructor(position, width, height) {
    this.position = position;
    this.width = width;
    this.height = height;
    this.boundingBox = new Rectangle(position.clone(), position.clone().translate((width * 48) - 1, (height * 48) - 1));
  }

  render = (camera) => {
    for (let h = 0; h < this.height; h++) {
      for (let w = 0; w < this.width; w++) {
        camera.renderArt('ground', this.position.x + (48 * w), this.position.y + (h * 48));
      }
    }
  }

}

export default Platform;
