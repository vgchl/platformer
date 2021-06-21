import { Components, HeroComponent } from "../components";
import { Entity, System } from "../engine";
import Keyboard from "./Keyboard";

class HeroControlSystem extends System {
  constructor(private keyboard: Keyboard) {
    super();
  }

  public update(entities: Entity[]): void {
    this.filterByComponentMask(
      entities,
      Components.hero.id | Components.speed.id
    ).forEach((entity) => {
      const heroComponent = Components.hero.get(entity);
      const speedComponent = Components.speed.get(entity);

      const keys = this.keyboard.keys();
      if (this.hasWalkLeft(heroComponent, keys)) {
        speedComponent.speedX = -3;
      } else if (this.hasWalkRight(heroComponent, keys)) {
        speedComponent.speedX = +3;
      } else {
        speedComponent.speedX = 0;
      }
    });
  }

  private hasWalkLeft(
    heroComponent: HeroComponent,
    keys: Set<string>
  ): boolean {
    return keys.has(heroComponent.keyLeft) && !keys.has(heroComponent.keyRight);
  }

  private hasWalkRight(
    heroComponent: HeroComponent,
    keys: Set<string>
  ): boolean {
    return keys.has(heroComponent.keyRight) && !keys.has(heroComponent.keyLeft);
  }
}

export default HeroControlSystem;
