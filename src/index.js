import Camera from './camera/camera.js';
import Keyboard from './Keyboard.js';
import World from './world/world.js';

const canvas = document.querySelector('.root canvas');
const camera = new Camera(canvas);
const world = new World();
const keyboard = new Keyboard();

let paused = false;
let lastFrameTime = 0;

const frame = (frameTime) => {
  if (!paused) {
    const dt = Math.min(0.05, (frameTime - lastFrameTime) / 1000)
    world.update(dt, keyboard.keys());
    camera.clear();
    world.render(camera);
  }
  window.requestAnimationFrame(frame);
  lastFrameTime = frameTime;
};

window.requestAnimationFrame(frame);
window.onblur = () => {
  paused = true;
}
window.onfocus = () => {
  lastFrameTime = 0;
  paused = false;
}
