/**
 * Represents the main game world including character, enemies, level logic, UI, and rendering.
 */
class World {
  character = new Valkyrie();
  minotaur = new Minotaur();
  level = createLevel1();
  canvas;
  ctx;
  key;
  cameraPosition = 0;
  valkyrieDamageAmount = 30;
  itemDamageAmount = 13;
  valkyrieStatusBar = new ValkyrieStatusBar();
  minotaurStatusBar = new MinotaurStatusBar();
  itemStatusBar = new ItemStatusBar();
  throwableObject = [new ThrowableObject()];
  intro = new Intro();
  sound = new SoundManager();
  restartButton = document.querySelector("#restart");
  unlock = this.sound.isMuted;

  /**
   * Creates a new game world.
   * @param {HTMLCanvasElement} canvas - The canvas element to draw on.
   * @param {Object} key - Object holding current key states.
   */
  constructor(canvas, key) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.key = key;
    this.setworld();
    this.draw();
    this.startGameLogic();
    this.activeSound();
    this.restart();
  }

  /** Initializes all recurring game logic functions. */
  startGameLogic() {
    this.checkCollisions();
    // this.checkIfDead(this.character, this.character.valkyrieDead);
    this.checkIfDead(this.minotaur, this.minotaur.minotaurDead);
    this.checkThrowing();
    this.checkEnemyHit();
    this.checkJumpOnEnemy();
  }

  /** Enables background sound on first key press. */
  activeSound() {
    document.addEventListener("keydown", () => {
      if (!this.unlock) {
        this.unlock = true;
        this.sound.volume("background", 0.3);
        this.sound.playSound("background");
      }
    });
  }

  /** Connects world reference to other objects. */
  setworld() {
    this.character.world = this;
    this.sound.world = this;
  }

  /** Starts item and gold collection checks. */
  checkItemAndGoldCollection() {
    this.character.intervals.push(
      setInterval(() => {
        this.collectGold();
        this.collectItems();
      }, 100)
    );
  }

  /** Handles gold collection logic. */
  collectGold() {
    this.level.gold.forEach((gold, index) => {
      if (this.character.isColliding(gold) && this.character.collectGold < 5) {
        this.level.gold.splice(index, 1);
        this.character.collectGold++;
        this.sound.playSound("gold");
        this.itemStatusBar.setGoldCount(this.character.collectGold);
      }
    });
  }

  /** Handles item collection logic. */
  collectItems() {
    this.level.item.forEach((item, index) => {
      if (this.character.isColliding(item) && this.character.collectItem < 5) {
        this.level.item.splice(index, 1);
        this.character.collectItem++;
        this.sound.playSound("item");
        this.itemStatusBar.setItemCount(this.character.collectItem);
      }
    });
  }

  /** Checks if character throws an item. */
  // prettier-ignore
  checkThrowing() {
    this.character.intervals.push(setInterval(() => {
      if (this.key.d && this.character && !this.character.isDead && this.character.collectItem > 0) {
        this.character.isThrowing = true;
        this.level.throwables.push(new ThrowableObject(this.character.x_position + 30, this.character.y_position + 20));
        this.character.collectItem--; 
        this.sound.playSound("throw");
        this.itemStatusBar.setItemCount(this.character.collectItem);
        this.character.updateAnimationFrame(this.character.valkyrieThrowing);
        setTimeout(() => 
          this.character.isThrowing = false, 60);
        this.key.d = false;
      }
    }, 100));
  }

  /** Checks collision between character and enemies. */
  checkCollisions() {
    this.character.intervals.push(
      setInterval(() => {
        if (this.character.isDead || this.character.live <= 0) return;
        this.level.enemies.forEach((enemy) => {
          if (this.character.isColliding(enemy) && !this.character.isHurt) {
            this.applyDamage();
          }
        });
        if (this.character.isColliding(this.minotaur) && !this.character.isHurt && !this.minotaur.isDead) {
          this.applyDamage();
        }
      }, 200)
    );
  }

  /**
   * Checks if the character should take damage.
   * @param {Enemy} enemy - An enemy to check collision against.
   * @returns {boolean}
   */
  shouldTakeDamage(enemy) {
    return (this.character.isColliding(enemy) || this.character.isColliding(this.minotaur)) && !this.character.isHurt;
  }

  /** Applies damage to the character. */
  applyDamage() {
    this.character.live -= this.valkyrieDamageAmount;
    if (this.character.live <= 0) {
      this.character.live = 0;
      this.character.isDead = true;
      this.character.currentImage = 0;
    }
    this.valkyrieStatusBar.setPercentage(this.character.live);
    this.character.isHurt = true;
    this.character.updateAnimationFrame(this.character.valkyrieHurt);
    setTimeout(() => (this.character.isHurt = false), 500);
  }

  /** Checks if enemies or the minotaur are hit by thrown items. */
  checkEnemyHit() {
    this.character.intervals.push(
      setInterval(() => {
        this.checkEnemyCollisionWithItem();
        this.checkMinotaurCollisionWithItem();
      }, 100)
    );
  }

  /** Checks if throwable hits a regular enemy. */
  checkEnemyCollisionWithItem() {
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

  /** Checks if throwable hits the minotaur. */
  checkMinotaurCollisionWithItem() {
    this.level.throwables.forEach((item, index) => {
      if (this.shouldDamageMinotaur(item)) {
        this.damageMinotaur(index);
      }
    });
  }

  /**
   * Checks if minotaur should take damage.
   * @param {ThrowableObject} item
   * @returns {boolean}
   */
  shouldDamageMinotaur(item) {
    return item.isColliding(this.minotaur) && !this.minotaur.isDead;
  }

  /**
   * Applies damage to the minotaur.
   * @param {number} index - Index of the throwable.
   */
  damageMinotaur(index) {
    this.minotaur.live -= this.itemDamageAmount;
    this.minotaurStatusBar.setPercentageMinotaur(this.minotaur.live);
    this.level.throwables.splice(index, 1);
    this.minotaur.isHurt = true;
    this.sound.playSound("minotaurDying");
    clearInterval(this.minotaur.walkingInterval);
    this.minotaur.updateAnimationFrame(this.minotaur.minotaurHurt);
    setTimeout(() => {
      this.minotaur.isHurt = this.minotaur.live > 0 ? false : (this.minotaur.isDead = true);
      this.minotaur.animate();
    }, 400);
  }

  /** Checks if the player jumps on an enemy. */
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

  /**
   * Updates character animation when dead.
   * @param {Valkyrie | Minotaur} character - The dead character.
   * @param {string[]} dyingAnimation - Animation frames.
   */
  checkIfDead(character, dyingAnimation) {
    this.character.intervals.push(
      setInterval(() => {
        if (character.isDead) {
          character.updateAnimationFrame(dyingAnimation);
          setTimeout(() => {
            this.character.stopIntervals();
          }, 2000);
        }
      }, 1000 / 5)
    );
  }

  /** Draws all UI elements (status bars). */
  drawUI() {
    this.addToMap(this.valkyrieStatusBar);
    this.addToMap(this.minotaurStatusBar);
    this.addToMap(this.itemStatusBar);
  }

  /** Main draw loop of the game. */
  draw() {
    this.clearCanvas();
    if (this.intro.introActive) {
      this.intro.update(this.ctx, this.key);
      requestAnimationFrame(() => this.draw());
      return;
    }
    this.ctx.save();
    this.updateCamera();
    this.renderGameWorld();
    this.ctx.restore();
    this.renderUIAndGameLogic();
    requestAnimationFrame(() => this.draw());
  }

  /** Clears the canvas. */
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /** Updates camera position. */
  updateCamera() {
    this.cameraPosition = this.character.x_position - 100;
    this.ctx.translate(-this.cameraPosition, 0);
  }

  /** Draws all objects in the world. */
  renderGameWorld() {
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);
    this.addToMap(this.minotaur);
    this.addObjectsToMap(this.level.bats);
    this.addObjectsToMap(this.level.gold);
    this.addObjectsToMap(this.level.item);
  }

  /** Renders UI and handles gameplay logic. */
  renderUIAndGameLogic() {
    this.drawUI();
    this.addObjectsToMap(this.level.throwables);
    this.checkItemAndGoldCollection();
    this.gameOver();
    this.winning();
  }

  /** Adds array of game objects to the canvas. */
  addObjectsToMap(objects) {
    objects.forEach((obj) => {
      if (obj instanceof Background) obj.y_position = 0;
      this.addToMap(obj);
    });
  }

  /** Adds a single game object to the canvas. */
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

  /** Flips image horizontally for directional rendering. */
  flipImage(element) {
    this.ctx.save();
    this.ctx.translate(element.x_position + element.width, 0);
    this.ctx.scale(-1, 1);
  }

  /** Shows game over message. */
  gameOver() {
    if (this.character.live <= 0) {
      this.ctx.font = "60px myFont";
      this.ctx.fillText("Your saga ends here.", 380, 200);
    }
  }

  /** Shows winning message and stops enemy behavior. */
  winning() {
    if (this.minotaur.live <= 0) {
      this.ctx.font = "40px myFont";
      this.ctx.fillText("You have earned your place in Valhalla!", 380, 200);
      this.character.stopIntervals();
      this.level.enemies.forEach((enemy) => enemy.stopIntervals?.());
    }
  }

  /** (Re)initializes game elements (status bars, throwables, etc.). */
  gameElements() {
    this.valkyrieStatusBar = new ValkyrieStatusBar();
    this.minotaurStatusBar = new MinotaurStatusBar();
    this.itemStatusBar = new ItemStatusBar();
    this.throwableObject = [new ThrowableObject()];
  }

  /** Initializes the game logic again, typically after restart. */
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

  /** Restarts the game when the restart button is clicked. */
  restart() {
    restartButton.addEventListener("click", () => {
      document.querySelector("#story").style.display = "flex";
      this.character = new Valkyrie();
      this.minotaur = new Minotaur();
      this.level = createLevel1();
      this.cameraPosition = 0;
      this.valkyrieDamageAmount = 15;
      this.itemDamageAmount = 50;
      this.gameElements();
      this.intro = new Intro();
      this.sound = new SoundManager();
      this.activeSound();
      this.initializeGameLogic();
      this.restartButton.blur();
      document.querySelector("#startButton").style.display = "block";
    });
  }
}
