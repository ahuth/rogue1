import Display from './Display';
import Map from './Map';
import Player from './Player';

const height = 20;
const width = 80;

export default class Game {
  display = new Display(height, width);
  map = new Map(height, width);
  player = new Player(0, 0);

  getElement(): HTMLElement {
    return this.display.getElement()!;
  }

  draw(): void {
    this.map.tiles.forEach(this.display.drawTile);
    this.display.drawTile(this.player.tile);
  }
}
