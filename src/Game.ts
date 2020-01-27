import * as ROT from 'rot-js';

export default class Game {
  display = new ROT.Display({ width: 10, height: 5 });

  getElement(): HTMLElement {
    return this.display.getContainer()!;
  }

  draw(): void {
    const map = new ROT.Map.Arena(10, 5);

    map.create((x, y, wall) => {
      this.display.draw(x, y, wall ? '#' : '.', 'white', 'black');
    });
  }
}
