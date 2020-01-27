import Game from './Game';
import './index.css';

const game = new Game();
document.body.appendChild(game.getElement());
game.draw();
