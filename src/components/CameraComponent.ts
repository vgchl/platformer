import { Component } from "../engine";

class CameraComponent extends Component {
  public canvas: HTMLCanvasElement;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
  }
}

export default CameraComponent;
