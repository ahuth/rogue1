import Glyph from './Glyph';
import Point from './Point';

export default class Tile {
  private glyph: Glyph;
  private position: Point;

  constructor(glyph: Glyph, position: Point) {
    this.glyph = glyph;
    this.position = position;
  }

  getGlyph(): Glyph {
    return this.glyph;
  }

  getPosition(): Point {
    return this.position;
  }

  setPosition(position: Point) {
    this.position = position;
  }
}
