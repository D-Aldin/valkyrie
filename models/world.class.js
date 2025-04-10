class World {
  character = new Valkyrie();
  level = level_1;
  canvas;
  ctx;
  key;
  cameraPosition = 0;

  constructor(canvas, key) {
    this.canvas = canvas
    this.ctx = canvas.getContext("2d");
    this.key = key;
    this.setworld();   
    this.draw();
     
  }

  setworld() {
    this.character.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.save();
    this.ctx.translate(-this.cameraPosition, 0);
    this.addObjectsToMap(this.level.backgroundObjects)
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.bats);
    this.ctx.restore();
    requestAnimationFrame(() => this.draw());
  }
  

  addObjectsToMap(objects) {
    objects.forEach((obj, index) => {
      if (obj instanceof Background) {
        obj.y_position = 0;
      }
      this.addToMap(obj);
    });
  }

  addToMap(element) {
    if (element.direction) {
      this.ctx.save();
      this.ctx.translate(element.x_position + element.width, 0);
      this.ctx.scale(-1, 1);
      this.ctx.drawImage(element.img, 0, element.y_position, element.width, element.height);
      this.ctx.restore();
    } else {
      this.ctx.drawImage(element.img, element.x_position, element.y_position, element.width, element.height);
    }
  }
 
}
