import * as ROT from 'rot-js';

type Game = {
  display: ROT.Display,
};

export function create(): Game {
  return {
    display: new ROT.Display({ width: 10, height: 5 }),
  };
}

export function getElement(game: Game): HTMLElement {
  return game.display.getContainer()!;
}

export function draw(game: Game): void {
  const map = new ROT.Map.Arena(10, 5);

  map.create((x, y, wall) => {
    game.display.draw(x, y, wall ? '#' : '.', 'white', 'black');
  });
}
