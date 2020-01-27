import * as ROT from 'rot-js';
import Glyph from './Glyph';
import Tile from './Tile';

export default class Map {
  tiles: Tile[] = [];

  constructor(height: number, width: number) {
    const generator = new ROT.Map.Cellular(width, height);
    generator.randomize(0.5);

    // Smooth the map
    for (let i = 0; i < 3; i += 1) {
      generator.create();
    }

    generator.create((x, y, value) => {
      const glyph = value === 1 ? Glyph.wall : Glyph.ground;
      this.tiles.push(new Tile(glyph, x, y));
    });
  }
}