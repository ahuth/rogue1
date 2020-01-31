import * as ROT from 'rot-js';
import Glyph from './Glyph';
import Point from './Point';
import Tile from './Tile';

const wall = new Glyph('#', 'white', 'black');
const ground = new Glyph(' ', 'black', 'black');

export default class Map {
  private tiles: Tile[] = [];

  constructor(height: number, width: number) {
    const generator = new ROT.Map.Cellular(width, height);
    generator.randomize(0.5);

    // Smooth the map
    for (let i = 0; i < 3; i += 1) {
      generator.create();
    }

    generator.create((x, y, value) => {
      const glyph = value === 1 ? wall : ground;
      const position = new Point(x, y);
      const tile = new Tile(glyph, position, value !== 1);
      this.tiles.push(tile);
    });
  }

  getTiles(): Tile[] {
    return this.tiles;
  }

  getTile(atPosition: Point): Tile | undefined {
    return this.tiles.find(tile => tile.getPosition().equals(atPosition));
  }
}
