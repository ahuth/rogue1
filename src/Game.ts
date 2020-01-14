import * as ROT from 'rot-js';

export default class {
  display: ROT.Display;

  constructor() {
    this.display = new ROT.Display();
  }

  init(container: Element) {
    container.appendChild(this.display.getContainer()!);
  }
}
