import { Component } from "../engine";

class HeroComponent extends Component {
  public constructor(public keyLeft: string, public keyRight: string) {
    super();
  }
}

export default HeroComponent;
