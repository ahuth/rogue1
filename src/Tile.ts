import Glyph from './Glyph';
import Point from './Point';

export default class Tile {
  private glyph: Glyph;
  private position: Point;
  private traversable: Boolean;

  constructor(glyph: Glyph, position: Point, traversable: Boolean) {
    this.glyph = glyph;
    this.position = position;
    this.traversable = traversable;
  }

  getGlyph(): Glyph {
    return this.glyph;
  }

  getPosition(): Point {
    return this.position;
  }

  isTraversable(): Boolean {
    return this.traversable;
  }

  setPosition(position: Point) {
    this.position = position;
  }
}
