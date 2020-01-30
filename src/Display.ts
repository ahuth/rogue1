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
    const position = tile.getPosition();
    const glyph = tile.getGlyph();

    this.rotDisplay.draw(
      position.x,
      position.y,
      glyph.char,
      glyph.foreground,
      glyph.background,
    );
  }
}
