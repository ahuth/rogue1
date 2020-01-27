export default class Glyph {
  char: string;
  foreground: string;
  background: string;

  static wall = new Glyph('#', 'white', 'black');
  static ground = new Glyph(' ', 'black', 'black');

  constructor(char: string, foreground = 'white', background = 'black') {
    this.char = char;
    this.foreground = foreground;
    this.background = background;
  }
}
