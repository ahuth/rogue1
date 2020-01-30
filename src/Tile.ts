import Glyph from './Glyph';
import Point from './Point';

export default class Tile {
  glyph: Glyph;
  position: Point;

  constructor(glyph: Glyph, position: Point) {
    this.glyph = glyph;
    this.position = position;
  }

  setPosition(position: Point) {
    this.position = position;
  }
}
