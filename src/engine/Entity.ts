import Component from './Component';
import ComponentId from './ComponentId';

class Entity {
  public components: Map<ComponentId, Component> = new Map();
  public componentMask: ComponentId;

  public updateComponentMask() {
    this.componentMask = Array.from(this.components.keys()).reduce((a, b) =>  a | b, 0);
  }

}

export default Entity;
