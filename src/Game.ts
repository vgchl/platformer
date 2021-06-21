import art from "./art.png";
import {
  CameraComponent,
  Components,
  HeroComponent,
  PositionComponent,
  SpeedComponent,
  SpriteComponent
} from "./components";
import { Entity, Scene } from "./engine";
import {
  CameraSystem,
  HeroControlSystem,
  Keyboard,
  MovementSystem
} from "./systems";

const scene = new Scene();

const hero = new Entity();
const img = new Image();
img.src = art;
const spriteComponent = new SpriteComponent(img, 0, 0, 96, 96);
hero.components.set(Components.position.id, new PositionComponent());
hero.components.set(Components.sprite.id, spriteComponent);
hero.components.set(Components.speed.id, new SpeedComponent());
hero.components.set(
  Components.hero.id,
  new HeroComponent("ArrowLeft", "ArrowRight")
);
hero.updateComponentMask();
scene.entities.push(hero);

const heroCamera = new Entity();
const canvas = document.querySelector(".root canvas") as HTMLCanvasElement;
heroCamera.components.set(Components.camera.id, new CameraComponent(canvas));
heroCamera.components.set(Components.position.id, new PositionComponent());
heroCamera.updateComponentMask();
scene.entities.push(heroCamera);

const movementSystem = new MovementSystem();
scene.systems.push(movementSystem);
const cameraSystem = new CameraSystem();
scene.systems.push(cameraSystem);

const keyboard = new Keyboard(document.querySelector("body"));
const heroControlSystem = new HeroControlSystem(keyboard);
scene.systems.push(heroControlSystem);

let paused = false;
let lastFrameTime = 0;

const frame = (frameTime) => {
  if (!paused) {
    scene.update();
  }
  window.requestAnimationFrame(frame);
  lastFrameTime = frameTime;
};

window.requestAnimationFrame(frame);
window.onblur = () => {
  paused = true;
};
window.onfocus = () => {
  lastFrameTime = 0;
  paused = false;
};
