import Glyph from './Glyph';

export default class Tile {
  glyph: Glyph;
  x: number;
  y: number;

  constructor(glyph: Glyph, x: number, y: number) {
    this.glyph = glyph;
    this.x = x;
    this.y = y;
  }
}
