export default class Glyph {
  char: string;
  foreground: string;
  background: string;

  constructor(char: string, foreground = 'white', background = 'black') {
    this.char = char;
    this.foreground = foreground;
    this.background = background;
  }
}
