/**
 * Class representing a background object in the game. Inherits from MovableObject.
 * The background object is typically used to create a scrolling effect.
 */
class Background extends MovableObject {
  /**
   * The width of the background object.
   * @type {number}
   */
  width = 720;

  /**
   * The height of the background object.
   * @type {number}
   */
  height = 480;

  /**
   * Creates an instance of the Background class.
   * @param {string} imagePath - The path to the image that will be used for the background.
   * @param {number} x - The initial x-position of the background.
   */
  constructor(imagePath, x) {
    super();
    this.loadImage(imagePath); // Loads the background image from the given path
    this.x_position = x; // Sets the x-position of the background
    this.y = 480 - this.height; // Sets the y position to the bottom of the screen
    this.y_position = 0; // Initial y-position set to 0, can be adjusted for scrolling
  }
}
