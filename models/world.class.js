class World {
  character = new Valkyrie();
  level = level_1;
  canvas;
  ctx;
  key;
  cameraPosition = 0;
  status = new StatusBar();
  itemStatusBar = new ItemStatusBar();
  gold = new GoldStatusBar();

  constructor(canvas, key) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.key = key;
    this.setworld();
    this.draw();
    this.checkCollisions();
    this.checkIfDead();
  }

  setworld() {
    this.character.world = this;
  }

  checkCollisions() {
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy) && !this.character.isHurt && !this.character.isDead) {
          this.character.live -= 5;
          this.status.setPercentage(this.character.live);
          this.character.isHurt = true;
          this.character.updateAnimationFrame(this.character.valkyrieHurt);
          // Reset hurt state after short delay (e.g., 500ms)
          setTimeout(() => {
            this.character.isHurt = false;
          }, 500);

          if (this.character.live <= 0) {
            this.character.isDead = true;
            this.character.currentImage = 0; // reset for clean death anim
          }
        }
      });
    }, 1000 / 5);
  }

  checkIfDead() {
    setInterval(() => {
      if (this.character.isDead) {
        this.character.updateAnimationFrame(this.character.valkyrieDead);
      }
    }, 1000 / 5);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.save();
    this.ctx.translate(-this.cameraPosition, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.bats);
    this.addObjectsToMap(this.level.gold);
    this.addObjectsToMap(this.level.item);
    this.ctx.restore();
    this.addToMap(this.status);
    this.addToMap(this.itemStatusBar);
    this.addToMap(this.gold);
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
      this.flipImage(element);
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
