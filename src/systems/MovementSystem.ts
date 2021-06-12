import { Components } from "../components";
import { Entity, System } from "../engine";

class MovementSystem extends System {
  update(allEntities: Entity[]): void {
    const entities = this.filterByComponentMask(
      allEntities,
      Components.position.id | Components.speed.id
    );

    entities.forEach((entity) => {
      const position = Components.position.get(entity);
      const speed = Components.speed.get(entity);

      position.x += speed.speedX;
      position.y += speed.speedY;
    });
  }
}

export default MovementSystem;
