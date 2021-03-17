import artMetadata from '../artMetadata.js';
import Position from '../geo/Position.js';

class Camera {

  position = new Position(0, 0);
  viewportWidth = 980;
  viewportHeight = 480;

  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d')
    configureCanvas(canvas)

    this.artImage = loadArt();
  }

  clear = () => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  /**
   * Draws an image to the canvas.
   *
   * Converts the provided World coordinates to canvas coordinates.
   *
   * @param {string} id The id of the image (see artMetadata)
   * @param {number} worldX The position at the X axis
   * @param {number} worldY The position at the Y axis
   */
  renderArt = (id, worldX, worldY) => {
    const art = artMetadata[id];

    const canvasX = Math.floor(worldX - this.position.x);
    const canvasY = Math.floor(worldY - this.position.y);

    this.context.drawImage(
      this.artImage,
      art.x, art.y,
      art.width, art.height,
      canvasX, canvasY,
      art.width, art.height
    );
  };
}

/**
 * Loads all the art used in the game.
 * All art is contained in a single PNG image sprite.
 *
 * @todo Handle async stuff
 */
const loadArt = () => {
  const art = new Image();
  art.src = "art.png";
  return art;
}

/**
 * Configures the canvas. Sets the size so it deals with high DPI screens correctly.
 *
 * @param {HTMLCanvasElement} canvas The canvas used for rendering.
 */
const configureCanvas = (canvas) => {
  const boundingClientRect = canvas.getBoundingClientRect();
  canvas.width = boundingClientRect.width;
  canvas.height = boundingClientRect.height;
}

export default Camera;
