import * as Game from './Game';
import './index.css';

const game = Game.create();
Game.append(game, document.body);
Game.drawMap(game);
