import Display from './Display';
import Map from './Map';

const height = 20;
const width = 80;

export default class Game {
  display = new Display(height, width);
  map = new Map(height, width);

  getElement(): HTMLElement {
    return this.display.getElement()!;
  }

  draw(): void {
    this.map.tiles.forEach(this.display.drawTile);
  }
}
