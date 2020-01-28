import Glyph from './Glyph';
import Tile from './Tile';

const glyph = new Glyph('@', 'hotpink', 'black');

export default class Player {
  tile: Tile;

  constructor(x: number, y: number) {
    this.tile = new Tile(glyph, x, y);
  }

  move(dX: number, dY: number) {
    this.tile.setPosition(this.tile.x + dX, this.tile.y + dY);
  }
}
