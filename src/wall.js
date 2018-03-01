export class Wall {

  constructor(color) {
    this.color = color;
  }

  paint() {
    document.body.style.background = this.color;
  }
}
