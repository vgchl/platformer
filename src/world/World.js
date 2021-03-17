import Hero from '../characters/Hero.js';
import HeroController from '../characters/HeroController.js';

class World {

  hero = new Hero();
  heroController = new HeroController(this.hero, document.querySelector('body'));

  update(frameTime) {
    this.hero.update(frameTime);
  }

  render(camera) {
    camera.position.x = this.hero.position.x - camera.viewportWidth / 3;
    camera.position.y = 0;

    const x = camera.position.x - (camera.position.x % 480)

    this.renderBackground(camera, x);
    this.renderTerrain(camera, x);
    this.hero.render(camera);
  }

  renderBackground = (camera, x) => {
    camera.renderArt('background', x, 0);
    camera.renderArt('background', x + 480, 0);
    camera.renderArt('background', x + 960, 0);
  }

  renderTerrain = (camera, x) => {
    for (let i = 0; i < 30; i++) {
      camera.renderArt('ground', x + (48 * i), 432)
    }
  }
}

export default World;
