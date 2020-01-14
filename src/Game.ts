import * as ROT from 'rot-js';

export default class {
  display: ROT.Display;

  constructor() {
    this.display = new ROT.Display({ width: 10, height: 5 });
  }

  init(container: Element) {
    container.appendChild(this.display.getContainer()!);
    this.drawMap();
  }

  private drawMap() {
    const map = new ROT.Map.Arena(10, 5);

    map.create((x, y, wall) => {
      this.display.draw(x, y, wall ? '#' : '.', 'white', 'black');
    });
  }
}
