import Display from './Display';
import Map from './Map';
import Player from './Player';
import Point from './Point';

const height = 20;
const width = 80;

export default class Game {
  display = new Display(height, width);
  map = new Map(height, width);
  player = new Player(new Point(0, 0));

  getElement(): HTMLElement {
    return this.display.getElement()!;
  }

  clear(): void {
    this.display.clear();
  }

  draw(): void {
    this.map.tiles.forEach(this.display.drawTile);
    this.display.drawTile(this.player.tile);
  }

  move(dX: number, dY: number): void {
    const delta = new Point(dX, dY);
    this.player.move(delta);
  }

  handleKeyDown(key: string): void {
    switch (key) {
      case 'ArrowUp':
        this.move(0, -1);break;
      case 'ArrowDown':
        this.move(0, 1);break;
      case 'ArrowLeft':
        this.move(-1, 0);break;
      case 'ArrowRight':
        this.move(1, 0);break;
      default:
        return;
    }

    this.clear();
    this.draw();
  }
}
