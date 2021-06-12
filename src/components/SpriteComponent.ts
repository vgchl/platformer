import { Component } from "../engine";

class SpriteComponent extends Component {
  public constructor(
    public image: HTMLImageElement,
    public offsetX: number,
    public offsetY: number,
    public height: number,
    public width: number
  ) {
    super();
  }
}

export default SpriteComponent;
