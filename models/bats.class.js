/**
 * Class representing a bat in the game. Inherits from MovableObject and is used to animate and control bat movement.
 * The bats move across the screen from right to left.
 */
class Bats extends MovableObject {
  /**
   * Array of image paths used to animate the bat's movement.
   * @type {string[]}
   */
  batsImages = ["./assets/image/bats/bats0.png", "./assets/image/bats/bats0.png"];

  /**
   * Creates an instance of the Bats class, initializing the bat's position, size, and animations.
   * Loads the bat images and starts the animation.
   */
  constructor() {
    super();
    this.loadImagesInCache(this.batsImages);
    this.loadImage(this.batsImages[0], true);
    this.y_position = 30;
    this.height = 500;
    this.width = 700;
    this.x_position = Math.random() * 1000;
    this.y_position = Math.random() * 100;
    this.animateMoving();
  }

  /**
   * Starts the bat's movement animation by calling the moveLeft function in intervals.
   * This method is called when the bat's movement is activated.
   */
  animateMoving() {
    setInterval(() => {
      this.moveLeft(this.batsImages);
    }, 60);
  }

  /**
   * Starts the bat's movement by calling the animateMoving method.
   * This method is usually invoked to begin the bat's animation.
   */
  startmoving() {
    this.animateMoving();
  }
}
