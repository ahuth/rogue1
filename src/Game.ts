import * as ROT from 'rot-js';

const height = 20;
const width = 80;

export default class Game {
  display = new ROT.Display({ width, height });

  getElement(): HTMLElement {
    return this.display.getContainer()!;
  }

  draw(): void {
    const generator = new ROT.Map.Cellular(width, height);
    generator.randomize(0.5);

    // Smooth the map
    for (let i = 0; i < 3; i += 1) {
      generator.create();
    }

    generator.create((x, y, wall) => {
      this.display.draw(x, y, wall ? '#' : ' ', 'white', 'black');
    });

    generator.connect(() => {}, 0);
  }
}
