import Camera from './camera/camera.js';
import World from './world/world.js';

const canvas = document.querySelector('.root canvas');
const camera = new Camera(canvas);
const world = new World();

const frame = (frameTime) => {
  world.update(frameTime);
  camera.clear();
  world.render(camera);
  window.requestAnimationFrame(frame);
};

window.requestAnimationFrame(frame);
