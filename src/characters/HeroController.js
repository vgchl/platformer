class HeroController {

  constructor(hero, element) {
    this.hero = hero;
    this.element = element;

    this.element.addEventListener('keydown', this.onKeyEvent);
    this.element.addEventListener('keyup', this.onKeyEvent);
  }

  onKeyEvent = (event) => {
    if (event.key == 'ArrowLeft') {
      this.onArrowLeft(event);
    }
    if (event.key == 'ArrowRight') {
      this.onArrowRight(event);
    }
  };

  onArrowRight = (event) => {
    if (event.type == 'keydown') {
      this.hero.startWalkingRight();
    }
    if (event.type == 'keyup') {
      this.hero.stopWalking();
    }
  }

  onArrowLeft = (event) => {
    if (event.type == 'keydown') {
      this.hero.startWalkingLeft();
    }
    if (event.type == 'keyup') {
      this.hero.stopWalking();
    }
  }

}

export default HeroController;
