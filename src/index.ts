import Game from './Game';
import './index.css';

const game = new Game();

window.addEventListener('keydown', function (event) {
  game.handleInput(event.key);
});

document.body.appendChild(game.getElement());
game.draw();
