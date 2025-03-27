class World {
  character = new Valkyrie();
  enemies = [new Skeleton(), new Skeleton(), new Skeleton()];
  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.canvas = canvas;
    this.ctx.drawImage(this.character.img, this.character.x_position, this.character.y_position, this.character.width, this.character.height);
    this.enemies.forEach((skeleton) => {
      this.ctx.drawImage(skeleton.img, skeleton.x_position, skeleton.y_position, skeleton.width, skeleton.height);
    });
    let self = this;
    requestAnimationFrame(() => {
      self.draw();
    });
  }
}
