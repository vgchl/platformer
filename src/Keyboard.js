const registeredKeys = new Set([
  'ArrowLeft',
  'ArrowRight',
  'ArrowUp',
]);

class Keyboard {

  constructor() {
    this.element = document.querySelector('body');
    this.element.addEventListener('keydown', this.onKeyEvent);
    this.element.addEventListener('keyup', this.onKeyEvent);

    this.draftKeys = new Map(Array.from(registeredKeys).map(value => [value, false]));
  }

  keys() {
    return { ...this.draftKeys };
  }

  onKeyEvent = (event) => {
    if (!registeredKeys.has(event.key)) {
      return;
    }

    this.draftKeys[event.key] = event.type == 'keydown';
  };

}

export default Keyboard;
