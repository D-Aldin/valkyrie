/**
 * Handles restarting the game, either with or without the intro screen.
 */
class GameRestarter {
  constructor(world) {
    this.world = world;
    this.standardRestartButton = document.querySelector("#restart");
    this.quickRestartButton = document.querySelector("#quick-restart");
    this.attachHandlers();
  }

  /**
   * Attaches click event handlers to the restart buttons.
   */
  attachHandlers() {
    this.standardRestartButton.addEventListener("click", () => this.restartGame(true));
    this.quickRestartButton.addEventListener("click", () => {
      this.restartGame(false);
    });
  }

  /**
   * Fully resets the game state, reinitializing characters, level, sounds, and logic.
   * @param {boolean} withIntro - If true, restarts with the intro screen; otherwise skips intro.
   */
  restartGame(withIntro = true) {
    this.world.character.stopIntervals();
    this.world.character.stopTimeouts();
    this.world.character = new Valkyrie();
    this.world.minotaur = new Minotaur();
    this.world.level = createLevel1();
    this.world.cameraPosition = 0;
    this.world.valkyrieDamageAmount = 15;
    this.world.itemDamageAmount = 35;
    this.world.gameElements();
    this.world.intro = new Intro();
    this.world.intro.introActive = withIntro;
    this.world.sound = new SoundManager();
    this.world.activeSound();
    this.world.initializeGameLogic();
    this.standardRestartButton.blur();
    this.quickRestartButton.blur();
    this.world.ctx.clearRect(0, 0, this.world.canvas.width, this.world.canvas.height);
    world.level.enemies.forEach((enemy) => {
      enemy.startWalking();
    });
  }
}
