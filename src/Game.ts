import * as ROT from 'rot-js';
import Map from './Map';

const height = 20;
const width = 80;

export default class Game {
  display = new ROT.Display({ width, height });
  map = new Map(height, width);

  getElement(): HTMLElement {
    return this.display.getContainer()!;
  }

  draw(): void {
    this.map.draw(this.display);
  }
}
