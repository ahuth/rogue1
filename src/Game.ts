import Display from './Display';
import Map from './Map';
import Player from './Player';
import Point from './Point';

const height = 20;
const width = 80;

export default class Game {
  private display = new Display(height, width);
  private map = new Map(height, width);
  private player = new Player(new Point(0, 0));

  getElement(): HTMLElement {
    return this.display.getElement()!;
  }

  clear(): void {
    this.display.clear();
  }

  draw(): void {
    this.map.getTiles().forEach(this.display.drawTile);
    this.display.drawTile(this.player.getTile());
  }

  move(dX: number, dY: number): void {
    const delta = new Point(dX, dY);
    const proposedPosition = this.player.getPosition().add(delta);
    const tile = this.map.getTile(proposedPosition);

    if (tile?.isTraversable()) {
      this.player.setPosition(proposedPosition);
    }
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
