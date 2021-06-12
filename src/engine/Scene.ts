import Entity from "./Entity";
import System from "./System";

class Scene {
  public entities: Entity[] = [];
  public systems: System[] = [];

  public update(): void {
    this.systems.forEach((system) => {
      system.update(this.entities);
    });
  }
}

export default Scene;
