import Glyph from './Glyph';
import Tile from './Tile';

const glyph = new Glyph('@', 'hotpink', 'black');

export default class Player {
  tile: Tile;

  constructor(x: number, y: number) {
    this.tile = new Tile(glyph, x, y);
  }

  setPosition(x: number, y: number) {
    this.tile.setPosition(x, y);
  }
}
