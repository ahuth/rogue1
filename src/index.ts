import * as Game from './Game';
import './index.css';

const game = Game.create();
document.body.appendChild(Game.getElement(game));
Game.drawMap(game);
