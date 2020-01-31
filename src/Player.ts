import Glyph from './Glyph';
import Point from './Point';
import Tile from './Tile';

const glyph = new Glyph('@', 'hotpink', 'black');

export default class Player {
  private tile: Tile;

  constructor(position: Point) {
    this.tile = new Tile(glyph, position, false);
  }

  getPosition(): Point {
    return this.tile.getPosition();
  }

  getTile(): Tile {
    return this.tile;
  }

  setPosition(position: Point): void {
    this.tile.setPosition(position);
  }
}
