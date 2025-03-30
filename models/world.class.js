class World {
  character = new Valkyrie();
  enemies = [new Skeleton(), new Skeleton(), new Skeleton()];
  bats = [new Bats(), new Bats()];
  canvas;
  ctx;
  key;
  backgroundObjects = [new Background("./assets/image/background/PNG/1/4.png", 0), new Background("./assets/image/background/PNG/1/5.png", 0), new Background("./assets/image/background/PNG/1/2.png", 700)];

  constructor(canvas, key) {
    this.ctx = canvas.getContext("2d");
    this.key = key;
    this.draw();
    this.setworld();
  }

  setworld() {
    this.character.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.canvas = canvas;
    this.addObjectsToMap(this.backgroundObjects);
    this.addToMap(this.character); // add valkyrie character
    this.addObjectsToMap(this.enemies); // add skeletons
    this.addObjectsToMap(this.bats);

    let self = this;
    requestAnimationFrame(() => {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((obj, index) => {
      if (obj instanceof Background) {
        obj.y_position = index * 5;
      }
      this.addToMap(obj);
    });
  }

  addToMap(element) {
    if (element.direction) {
      this.ctx.save();
      // Translate to the character's right edge before flipping
      this.ctx.translate(element.x_position + element.width, 0);
      this.ctx.scale(-1, 1);
      this.ctx.drawImage(element.img, 0, element.y_position, element.width, element.height);
      this.ctx.restore();
    } else {
      this.ctx.drawImage(element.img, element.x_position, element.y_position, element.width, element.height);
    }
  }
}
