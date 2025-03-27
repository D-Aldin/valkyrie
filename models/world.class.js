class World {
  character = new Valkyrie();
  enemies = [new Skeleton(), new Skeleton(), new Skeleton()];
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.draw();
  }

  draw() {
    this.ctx.drawImage(this.character.img, this.character.x_position, this.character.y_position, this.character.width, this.character.height);
  }
}
