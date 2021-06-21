class Keyboard {
  private downKeys: Set<string> = new Set();

  constructor(private element: HTMLElement) {
    this.element.addEventListener("keydown", this.onKeyDown);
    this.element.addEventListener("keyup", this.onKeyUp);
  }

  public keys(): Set<string> {
    return new Set(this.downKeys);
  }

  private onKeyDown = (event: KeyboardEvent): void => {
    this.downKeys.add(event.key);
  };

  private onKeyUp = (event: KeyboardEvent): void => {
    this.downKeys.delete(event.key);
  };
}

export default Keyboard;
