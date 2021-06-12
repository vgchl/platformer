import {
  CameraComponent,
  Components,
  PositionComponent,
  SpriteComponent,
} from "../components";
import { Entity, System } from "../engine";

class CameraSystem extends System {
  public update(entities: Entity[]): void {
    this.filterByComponentMask(entities, Components.camera.id).forEach(
      (entity) => {
        const camera = Components.camera.get(entity);
        const cameraPosition = Components.position.get(entity);
        this.configureCanvas(camera.canvas);

        this.filterByComponentMask(entities, Components.sprite.id).forEach(
          (entity) => {
            const sprite = Components.sprite.get(entity);
            const spritePosition = Components.position.get(entity);
            this.renderSprite(camera, cameraPosition, sprite, spritePosition);
          }
        );
      }
    );
  }

  private renderSprite = (
    camera: CameraComponent,
    cameraPosition: PositionComponent,
    sprite: SpriteComponent,
    spritePosition: PositionComponent
  ): void => {
    const canvasX = Math.round(spritePosition.x - cameraPosition.x);
    const canvasY = Math.round(spritePosition.y - cameraPosition.y);
    camera.canvas
      .getContext("2d")
      .drawImage(
        sprite.image,
        sprite.offsetX,
        sprite.offsetY,
        sprite.width,
        sprite.height,
        canvasX,
        canvasY,
        sprite.width,
        sprite.height
      );
  };

  private configureCanvas = (canvas: HTMLCanvasElement): void => {
    const boundingClientRect = canvas.getBoundingClientRect();
    canvas.width = boundingClientRect.width;
    canvas.height = boundingClientRect.height;
  };
}

export default CameraSystem;
