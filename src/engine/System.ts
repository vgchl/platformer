import ComponentId from './ComponentId';
import Entity from './Entity';

abstract class System {

  public abstract update(entities: Entity[]): void;

  protected filterByComponentMask(entities: Entity[], mask: ComponentId): Entity[] {
    return entities.filter(entity => (entity.componentMask & mask) == mask);
  }

  protected component<T>(entity: Entity, componentId: ComponentId): T {
    return entity.components.get(componentId) as T;
  }

}

export default System;
