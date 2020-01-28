import * as ROT from 'rot-js';
import Tile from './Tile';

export default class Display {
  private rotDisplay: ROT.Display;

  constructor(height: number, width: number) {
    this.rotDisplay = new ROT.Display({ height, width });
  }

  getElement(): HTMLElement {
    return this.rotDisplay.getContainer()!;
  }

  clear(): void {
    this.rotDisplay.clear();
  }

  drawTile = (tile: Tile): void => {
    this.rotDisplay.draw(
      tile.x,
      tile.y,
      tile.glyph.char,
      tile.glyph.foreground,
      tile.glyph.background,
    );
  }
}
