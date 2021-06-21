import { Components, HeroComponent, SpeedComponent } from "../components";
import { Entity } from "../engine";
import HeroControlSystem from "./HeroControlSystem";
import Keyboard from "./Keyboard";

let keyboard: Keyboard;
let keys: Set<string>;
let heroAEntity: Entity;
let heroBEntity: Entity;
let heroASpeedComponent: SpeedComponent;
let heroBSpeedComponent: SpeedComponent;
let heroControlSystem: HeroControlSystem;

const buildHeroEntity = (
  speedComponent: SpeedComponent,
  keyLeft: string,
  keyRight: string
) => {
  const heroEntity = new Entity();
  heroEntity.components.set(
    Components.hero.id,
    new HeroComponent(keyLeft, keyRight)
  );
  heroEntity.components.set(Components.speed.id, speedComponent);
  heroEntity.updateComponentMask();
  return heroEntity;
};

beforeEach(() => {
  heroASpeedComponent = new SpeedComponent();
  heroBSpeedComponent = new SpeedComponent();

  heroAEntity = buildHeroEntity(heroASpeedComponent, "A", "D");
  heroBEntity = buildHeroEntity(heroBSpeedComponent, "J", "L");

  keys = new Set();
  keyboard = {
    keys: () => {
      return keys;
    },
  } as Keyboard;
  heroControlSystem = new HeroControlSystem(keyboard);
});

test.each([
  { keys: [], speedA: 0, speedB: 0 },
  { keys: ["A"], speedA: -3, speedB: 0 },
  { keys: ["D"], speedA: +3, speedB: 0 },
  { keys: ["A", "D"], speedA: 0, speedB: 0 },
  { keys: ["J"], speedA: 0, speedB: -3 },
  { keys: ["L"], speedA: 0, speedB: +3 },
  { keys: ["J", "L"], speedA: 0, speedB: 0 },
  { keys: ["A", "J"], speedA: -3, speedB: -3 },
  { keys: ["D", "L"], speedA: +3, speedB: +3 },
  { keys: ["A", "L"], speedA: -3, speedB: +3 },
  { keys: ["D", "J"], speedA: +3, speedB: -3 },
  { keys: ["A", "D", "J", "L"], speedA: 0, speedB: 0 },
])(
  "sets heroA speed to $speedA and heroB speed to $speedB when $keys are pressed",
  (example) => {
    example.keys.forEach((key) => keys.add(key));

    heroControlSystem.update([heroAEntity, heroBEntity]);

    expect(heroASpeedComponent.speedX).toBe(example.speedA);
    expect(heroBSpeedComponent.speedX).toBe(example.speedB);
  }
);

test("ignores other entities", () => {
  heroControlSystem.update([{} as Entity]);
});
