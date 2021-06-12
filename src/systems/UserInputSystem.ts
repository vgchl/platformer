import { Components } from "../components";
import { Entity, System } from "../engine";
import Keyboard from "./Keyboard";

class UserInputSystem extends System {
  constructor(private keyboard: Keyboard) {
    super();
  }

  public update(entities: Entity[]): void {
    this.filterByComponentMask(entities, Components.controllable.id).forEach(
      (entity) => {
        const camera = Components.camera.get(entity);
        const cameraPosition = Components.position.get(entity);

        this.filterByComponentMask(entities, Components.sprite.id).forEach(
          (entity) => {
            const sprite = Components.sprite.get(entity);
            const spritePosition = Components.position.get(entity);
          }
        );
      }
    );
  }
}

export default UserInputSystem;

/**
 * UP, DOWN, LEFT, RIGHT
 * JUMP
 * FIRE
 */
