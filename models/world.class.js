class World {
  character = new Valkyrie();
  level = level_1;
  canvas;
  ctx;
  key;
  cameraPosition = 0;
  healthStatusBar = new HealthstatusBar();
  itemStatusBar = new ItemStatusBar();
  GoldStatusBar = new GoldStatusBar();
  throwableObject = [new ThrowableObject()];

  constructor(canvas, key) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.key = key;
    this.setworld();
    this.draw();
    this.checkCollisions();
    this.checkIfDead();
    this.checkThrowing();
  }

  setworld() {
    this.character.world = this;
  }

  checkItemAndGoldCollection() {
    setInterval(() => {
      this.level.gold.forEach((gold, index) => {
        if (this.character.isColliding(gold)) {
          this.level.gold.splice(index, 1);
          this.character.collectGold += 1;
          console.log(this.character.collectGold);
          this.GoldStatusBar.setGoldCount(this.character.collectGold);
        }
      });

      this.level.item.forEach((item, index) => {
        if (this.character.isColliding(item)) {
          this.level.item.splice(index, 1);
          this.character.collectItem += 1;
          console.log(this.character.collectItem);
          this.itemStatusBar.setItemCount(this.character.collectItem);
        }
      });
    }, 100);
  }

  checkThrowing() {
    setInterval(() => {
      if (this.key.d && this.character && !this.character.isDead && this.character.collectItem > 0) {
        console.log("throwing item");

        let throwItem = new ThrowableObject(this.character.x_position + 30, this.character.y_position + 20);
        this.level.throwables.push(throwItem);
        this.key.d = false;
      }
    }, 100);
  }

  checkCollisions() {
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy) && !this.character.isHurt && !this.character.isDead) {
          this.character.live -= 5;
          this.healthStatusBar.setPercentage(this.character.live);
          this.character.isHurt = true;
          this.character.updateAnimationFrame(this.character.valkyrieHurt);
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
    this.addToMap(this.healthStatusBar);
    this.addToMap(this.itemStatusBar);
    this.addToMap(this.GoldStatusBar);
    this.addObjectsToMap(this.level.throwables);
    this.checkItemAndGoldCollection();
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
