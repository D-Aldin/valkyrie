/**
 * Class representing the introductory screen of the game.
 * The intro screen displays an image and a message prompting the player to start the game by pressing Enter.
 */
class Intro extends DrawableObject {
  /**
   * The width of the intro screen.
   * @type {number}
   */
  width = 720;

  /**
   * The height of the intro screen.
   * @type {number}
   */
  height = 480;

  /**
   * Indicates whether the intro screen is currently active.
   * @type {boolean}
   */
  introActive = true;

  /**
   * Creates an instance of the Intro class.
   * Initializes the image and sets the position of the intro screen.
   */
  constructor() {
    super();
    this.loadImage("./assets/image/intro/introImage.png", true); // Load the intro image.
    this.x_position = 0; // Set the x-coordinate to position the image at the left.
    this.y_position = 0; // Set the y-coordinate to position the image at the top.
  }

  /**
   * Updates the intro screen.
   * Draws the intro screen image and text.
   * Listens for the "Enter" key press to hide the intro and start the game.
   *
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context used to draw the intro screen.
   * @param {Keyboard} key - The keyboard object containing the state of the keys.
   *
   */
  update(ctx, key) {
    this.draw(ctx);
    this.drawText(ctx);
    if (key.enter) {
      this.introActive = false;
      key.enter = false;
      document.querySelector("#story").style.display = "none";
      document.querySelector("#storyMobile").style.display = "none";
      world.level.enemies.forEach((enemy) => {
        enemy.startWalking();
      });
      world.level.bats.forEach((bat) => {
        bat.startmoving();
      });
    }
  }

  hasTouchSupport() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }

  /**
   * Draws the introductory text on the canvas.
   * The text instructs the player to press "Enter" to start the game.
   *
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context used to draw the text.
   */
  drawText(ctx) {
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    if (this.hasTouchSupport()) {
      ctx.fillText("", this.width / 2, this.height - 30);
    } else {
      ctx.fillText("Press Enter to Start", this.width / 2, this.height - 30);
    }
  }
}
