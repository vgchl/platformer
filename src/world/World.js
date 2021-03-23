import Position from '../geo/Position.js';
import Blob from './Blob.js';
import Hero from './Hero.js';
import Platform from './Platform.js';

const TILE_SIZE = 48;

class World {

  hero = new Hero();
  platforms = [
    new Platform(new Position(0, 432), 20, 1),
    new Platform(new Position(0, 432 - (TILE_SIZE * 5)), 3, 1)
  ];
  blobs = [new Blob(new Position(100, 384))]

  update(dt, keys) {
    this.blobs.forEach(blob => blob.update(dt));
    this.hero.update(dt, keys);
    this.handleCollisions();
  }

  handleCollisions() {
    const platforms = this.platforms.filter(platform => this.hero.boundingBox.intersects(platform.boundingBox));
    this.hero.collideWithPlatforms(platforms)
    const blobs = this.blobs.filter(blob => this.hero.boundingBox.intersects(blob.boundingBox));
    this.hero.collideWithBlobs(blobs);
  }

  render(camera) {
    camera.position.x = Math.max(0, this.hero.position.x - camera.viewportWidth / 3);
    camera.position.y = 0;

    const x = camera.position.x - (camera.position.x % 480)

    this.renderBackground(camera, x);
    this.platforms.forEach(platform => platform.render(camera))
    this.blobs.forEach(blob => blob.render(camera));
    this.hero.render(camera);
  }

  renderBackground = (camera, x) => {
    camera.renderArt('background', x, 0);
    camera.renderArt('background', x + 480, 0);
    camera.renderArt('background', x + 960, 0);
  }

}

export default World;
