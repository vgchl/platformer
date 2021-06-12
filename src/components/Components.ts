import { ComponentId, Entity } from "../engine";
import CameraComponent from "./CameraComponent";
import PositionComponent from "./PositionComponent";
import SpeedComponent from "./SpeedComponent";
import SpriteComponent from "./SpriteComponent";

class ComponentTypeDefinition<T> {
  public constructor(public readonly id: ComponentId) {}

  /**
   * Helper method to retrieve a component from an entity in a type safe way.
   *
   * @param entity The entity to retrieve the component from.
   * @returns The component, or null if the entity does not have such a component.
   */
  public get(entity: Entity): T {
    return entity.components.get(this.id) as T;
  }
}

class Components {
  public static readonly position =
    new ComponentTypeDefinition<PositionComponent>(2 ** 0);
  public static readonly sprite = new ComponentTypeDefinition<SpriteComponent>(
    2 ** 1
  );
  public static readonly camera = new ComponentTypeDefinition<CameraComponent>(
    2 ** 2
  );
  public static readonly speed = new ComponentTypeDefinition<SpeedComponent>(
    2 ** 3
  );
}

export default Components;
