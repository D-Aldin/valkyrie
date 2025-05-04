class World {
  character = new Valkyrie();
  minotaur = new Minotaur();
  level = createLevel1();
  canvas;
  ctx;
  key;
  cameraPosition = 0;
  valkyrieDamageAmount = 15;
  itemDamageAmount = 50;
  valkyrieStatusBar = new ValkyrieStatusBar();
  minotaurStatusBar = new MinotaurStatusBar();
  itemStatusBar = new ItemStatusBar();
  goldStatusBar = new GoldStatusBar();
  throwableObject = [new ThrowableObject()];
  intro = new Intro();
  sound = new SoundManager();
  restartButton = document.querySelector("#restart");

  constructor(canvas, key) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.key = key;
    this.setworld();
    this.draw();
    this.checkCollisions();
    this.checkMinotaurCollision();
    this.checkIfDead(this.character, this.character.valkyrieDead);
    this.checkIfDead(this.minotaur, this.minotaur.minotaurDead);
    this.checkThrowing();
    this.checkEnemyHit();
    this.checkJumpOnEnemy();
    this.gameOver();
    this.sound.addSound("background", "./assets/sounds/background.mp3", true);
    this.sound.addSound("skeleton", "./assets/sounds/skeleton.mp3");
    this.sound.addSound("gold", "./assets/sounds/gold.mp3");
    this.sound.addSound("jump", "./assets/sounds/jump.mp3");
    this.sound.addSound("throw", "./assets/sounds/throw.mp3");
    this.sound.addSound("minotaurDying", "./assets/sounds/minotaurDying.mp3");
    this.sound.addSound("item", "./assets/sounds/item.mp3");
    this.sound.volume("background", 1);
    this.sound.playSound("background");
    this.restart();
  }

  setworld() {
    this.character.world = this;
    this.sound.world = this;
  }

  checkItemAndGoldCollection() {
    this.character.intervals.push(
      setInterval(() => {
        this.level.gold.forEach((gold, index) => {
          if (this.character.isColliding(gold) && this.character.collectGold < 5) {
            this.level.gold.splice(index, 1);
            this.character.collectGold += 1;
            this.sound.playSound("gold");
            this.goldStatusBar.setGoldCount(this.character.collectGold);
          }
        });
        this.level.item.forEach((item, index) => {
          if (this.character.isColliding(item) && this.character.collectItem < 5) {
            this.level.item.splice(index, 1);
            this.character.collectItem += 1;
            this.sound.playSound("item");
            this.itemStatusBar.setItemCount(this.character.collectItem);
          }
        });
      }, 100)
    );
  }

  checkThrowing() {
    this.character.intervals.push(
      setInterval(() => {
        if (this.key.d && this.character && !this.character.isDead && this.character.collectItem > 0) {
          this.character.isThrowing = true;
          let throwItem = new ThrowableObject(this.character.x_position + 30, this.character.y_position + 20);
          this.level.throwables.push(throwItem);
          this.character.collectItem -= 1;
          this.sound.playSound("throw");
          this.itemStatusBar.setItemCount(this.character.collectItem);
          this.character.updateAnimationFrame(this.character.valkyrieThrowing);
          setTimeout(() => {
            this.character.isThrowing = false;
          }, 60);
          this.key.d = false;
        }
      }, 100)
    );
  }

  checkCollisions() {
    this.character.intervals.push(
      setInterval(() => {
        this.level.enemies.forEach((enemy) => {
          if (
            this.character.isColliding(enemy) ||
            (this.character.isColliding(this.minotaur) && !this.character.isHurt && !this.character.isDead)
          ) {
            this.character.live -= this.valkyrieDamageAmount;
            this.valkyrieStatusBar.setPercentage(this.character.live);
            this.character.isHurt = true;
            this.character.updateAnimationFrame(this.character.valkyrieHurt);
            setTimeout(() => (this.character.isHurt = false), 500);
            if (this.character.live <= 0) Object.assign(this.character, { isDead: true, currentImage: 0 });
          }
        });
      }, 200)
    );
  }

  checkEnemyHit() {
    this.character.intervals.push(
      setInterval(() => {
        this.checkEnemyCollision();
        this.checkMinotaurCollision();
      }, 100)
    );
  }

  checkEnemyCollision() {
    if (!this.character.isDead) {
      this.level.enemies.forEach((enemy, enemyIndex) => {
        this.level.throwables.forEach((item, itemIndex) => {
          if (item.isColliding(enemy)) {
            this.level.enemies.splice(enemyIndex, 1);
            this.level.throwables.splice(itemIndex, 1);
          }
        });
      });
    }
  }

  checkMinotaurCollision() {
    this.level.throwables.forEach((item, itemIndex) => {
      if (item.isColliding(this.minotaur) && !this.minotaur.isDead) {
        this.minotaur.live -= this.itemDamageAmount;
        this.sound.playSound("minotaurDying");
        this.minotaurStatusBar.setPercentageMinotaur(this.minotaur.live);
        this.level.throwables.splice(itemIndex, 1);
        if (this.minotaur.live > 0) {
          this.minotaur.updateAnimationFrame(this.minotaur.minotaurHurt);
          setTimeout(() => this.minotaur.updateAnimationFrame(this.minotaur.minotaurWalking), 200);
        } else Object.assign(this.minotaur, { isDead: true, currentImage: 0, movingRight: false });
      }
    });
  }

  checkJumpOnEnemy() {
    this.character.intervals.push(
      setInterval(() => {
        this.level.enemies.forEach((enemy, index) => {
          if (enemy.isStomped(this.character)) {
            this.level.enemies.splice(index, 1);
            this.character.speedY = 20;
            this.sound.playSound("skeleton");
          } else if (enemy.isColliding(this.character)) {
            if (!this.character.isHurt && !this.character.isDead) {
              this.character.updateAnimationFrame(this.character.valkyrieHurt);
            }
          }
        });
      }, 1000 / 25)
    );
  }

  checkIfDead(character, dyingAnimation) {
    this.character.intervals.push(
      setInterval(() => {
        if (character.isDead) {
          character.updateAnimationFrame(dyingAnimation);
        }
      }, 1000 / 5)
    );
  }

  drawUI() {
    this.addToMap(this.valkyrieStatusBar);
    this.addToMap(this.minotaurStatusBar);
    this.addToMap(this.itemStatusBar);
    this.addToMap(this.goldStatusBar);
  }

  // TODO
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (this.intro.introActive) {
      this.intro.update(this.ctx, this.key);
      requestAnimationFrame(() => this.draw());
      return;
    }
    this.ctx.save();
    this.cameraPosition = this.character.x_position - 100;
    this.ctx.translate(-this.cameraPosition, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);
    this.addToMap(this.minotaur);
    this.addObjectsToMap(this.level.bats);
    this.addObjectsToMap(this.level.gold);
    this.addObjectsToMap(this.level.item);
    this.ctx.restore();
    this.drawUI();
    this.addObjectsToMap(this.level.throwables);
    this.checkItemAndGoldCollection();
    this.gameOver();
    this.winning();
    requestAnimationFrame(() => this.draw());
  }

  addObjectsToMap(objects) {
    objects.forEach((obj) => {
      if (obj instanceof Background) {
        obj.y_position = 0;
      }
      this.addToMap(obj);
    });
  }

  addToMap(element) {
    if (element.direction) {
      this.flipImage(element);
      this.ctx.drawImage(element.img, 0, element.y_position, element.width, element.height);
      this.ctx.restore();
    } else {
      if (element instanceof ThrowableObject) {
        element.draw(this.ctx, this.cameraPosition);
      } else {
        element.draw(this.ctx);
      }
    }
  }

  flipImage(element) {
    this.ctx.save();
    this.ctx.translate(element.x_position + element.width, 0);
    this.ctx.scale(-1, 1);
  }

  gameOver() {
    if (this.character.live <= 0) {
      this.ctx.font = "60px myFont";
      this.ctx.fillText("Your saga ends here.", 380, 200);
      setTimeout(() => {
        clearInterval(this.character.valkyrieHurt);
        this.character.stopIntervals();
      }, 4000);
    }
  }

  winning() {
    if (this.minotaur.live <= 0) {
      this.ctx.font = "40px myFont";
      this.ctx.fillText("You have earned your place in Valhalla!", 380, 200);
      this.character.stopIntervals();
      this.level.enemies.forEach((enemy) => {
        enemy.stopIntervals?.();
      });
    }
  }

  gameElements() {
    this.valkyrieStatusBar = new ValkyrieStatusBar();
    this.minotaurStatusBar = new MinotaurStatusBar();
    this.itemStatusBar = new ItemStatusBar();
    this.goldStatusBar = new GoldStatusBar();
    this.throwableObject = [new ThrowableObject()];
  }

  initializeGameLogic() {
    this.draw();
    this.checkCollisions();
    this.checkIfDead(this.character, this.character.valkyrieDead);
    this.checkIfDead(this.minotaur, this.minotaur.minotaurDead);
    this.checkThrowing();
    this.checkEnemyHit();
    this.checkJumpOnEnemy();
    this.setworld();
  }

  restart() {
    restartButton.addEventListener("click", () => {
      this.character = new Valkyrie();
      this.minotaur = new Minotaur();
      this.level = createLevel1();
      this.cameraPosition = 0;
      this.valkyrieDamageAmount = 15;
      this.itemDamageAmount = 50;
      this.gameElements();
      this.intro = new Intro();
      this.sound = new SoundManager();
      this.initializeGameLogic();
      this.restartButton.blur();
    });
  }
}
