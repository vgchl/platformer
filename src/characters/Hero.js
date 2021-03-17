import Position from '../geo/Position.js';

class Hero {

  position = new Position(480, 336);
  speedX = 0;

  render = (camera) => {
    camera.renderArt('hero', this.position.x, this.position.y);
  };

  update = () => {
    this.position.x += this.speedX;
  };

  startWalkingLeft = () => {
    this.speedX = -5;
  };

  startWalkingRight = () => {
    this.speedX = 5;
  };

  stopWalking = () => {
    this.speedX = 0;
  };

}

export default Hero;
