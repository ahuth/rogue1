import Glyph from './Glyph';
import Point from './Point';
import Tile from './Tile';

const glyph = new Glyph('@', 'hotpink', 'black');

export default class Player {
  tile: Tile;

  constructor(position: Point) {
    this.tile = new Tile(glyph, position);
  }

  move(delta: Point) {
    const next = this.tile.position.add(delta);
    this.tile.setPosition(next);
  }
}
