import Position from '../geo/Position.js';
import Rectangle from '../geo/Rectangle.js';

class Hero {

  position = new Position(48, 0);

  render = (camera) => {
    camera.renderArt('hero', this.position.x, this.position.y);
  };

  update = (dt, keys) => {
    if (keys['ArrowLeft']) {
      this.walk(-300, dt);
    }
    if (keys['ArrowRight']) {
      this.walk(+300, dt);
    }
    this.position.y += 300 * dt;
  };

  walk = (speed, dt) => {
    this.position.x += speed * dt;
  }

  collideWithPlatforms = (platforms) => {
    platforms.forEach(platform => this.resolveCollision(this.boundingBox, platform.boundingBox))
  };

  collideWithBlobs = (blobs) => {
    blobs.forEach(blob => blob.die())
  };

  get boundingBox() {
    return new Rectangle(this.position.clone().translate(23,47), this.position.clone().translate(71, 95))
  };

  resolveCollision = (a, b) => {
    const aw = (a.bottomRight.x - a.topLeft.x) / 2;
    const bw = (b.bottomRight.x - b.topLeft.x) / 2;
    const ah = (a.bottomRight.y - a.topLeft.y) / 2;
    const bh = (b.bottomRight.y - b.topLeft.y) / 2;
    // get the vectors to check against
    var vX = (a.topLeft.x + aw) - (b.topLeft.x + bw),
        vY = (a.bottomRight.y + ah) - (b.bottomRight.y + bh),
        // Half widths and half heights of the objects
        ww2 = aw + bw,
        hh2 = ah + bh;
    // if the x and y vector are less than the half width or half height,
    // they we must be inside the object, causing a collision
    if (Math.abs(vX) < ww2 && Math.abs(vY) < hh2) {
        // figures out on which side we are colliding (top, bottom, left, or right)
        var oX = Math.floor(ww2 - Math.abs(vX)),
            oY = Math.floor(hh2 - Math.abs(vY));
        if (oX >= oY) {
            if (vY > 0) {
                this.position.y += oY;
            } else {
                this.position.y -= oY;
            }
        } else {
            if (vX > 0) {
                this.position.x += oX;
            } else {
                this.position.x -= oX;
            }
        }
    }
}
}

export default Hero;
