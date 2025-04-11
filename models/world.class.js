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
    this.checkCollisions();
     
  }

  setworld() {
    this.character.world = this;
  }

  checkCollisions() {
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
          this.character.updateAnimationFrame(this.character.valkyrieHurt);
        }
        });
    

    }, 1000 / 8);
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
      element.drawFrame(this.ctx);
      this.flipImage(element)
      this.ctx.drawImage(element.img, 0, element.y_position, element.width, element.height);
      this.ctx.restore();
    } else {
      element.draw(this.ctx);
      element.drawFrame(this.ctx);
    }
  }

  flipImage(element) {
    this.ctx.save();
    this.ctx.translate(element.x_position + element.width, 0);
    this.ctx.scale(-1, 1);
  }




  
 
}
