/**
 * Class representing the Valkyrie status bar.
 * This class handles the display of the Valkyrie's health as an image, adjusting based on the health percentage.
 *
 * @extends DrawableObject
 */
class ValkyrieStatusBar extends DrawableObject {
  /**
   * Array of images representing the health status of the Valkyrie at different percentages.
   * @type {string[]}
   */
  healthValkyrie = [
    "./assets/image/status/health1.png",
    "./assets/image/status/health2.png",
    "./assets/image/status/health3.png",
    "./assets/image/status/health4.png",
    "./assets/image/status/health5.png",
    "./assets/image/status/health6.png",
  ];

  /**
   * The current health percentage of the Valkyrie.
   * @type {number}
   */
  percentageValkyrie = 100;

  /**
   * The amount of items collected by the Valkyrie (not currently used in the status bar, but initialized).
   * @type {number}
   */
  item = 0;

  /**
   * Creates an instance of the Valkyrie status bar.
   * Initializes the health bar and sets the initial health percentage.
   */
  constructor() {
    super();
    this.loadImage("./assets/image/status/health6.png");
    this.loadImagesInCache(this.healthValkyrie);
    this.setPercentage(this.percentageValkyrie);
    this.x_position = 140;
    this.y_position = 50;
    this.width = 50;
    this.height = 75;
  }

  /**
   * Sets the health percentage of the Valkyrie and updates the displayed image accordingly.
   *
   * @param {number} percentage - The health percentage to be set (between 0 and 100).
   */
  setPercentage(percentage) {
    this.percentageValkyrie = percentage;
    let path = this.healthValkyrie[this.resolveImagePath(percentage) - 1];
    this.img = this.imageCache[path];
  }

  /**
   * Resolves the appropriate image index based on the current health percentage.
   *
   * @param {number} percentage - The current health percentage.
   * @returns {number} The index of the health image corresponding to the given percentage.
   */
  resolveImagePath(percentage) {
    if (percentage == 100) {
      return 6;
    } else if (percentage >= 80) {
      return 5;
    } else if (percentage >= 60) {
      return 4;
    } else if (percentage >= 40) {
      return 3;
    } else if (percentage >= 20) {
      return 2;
    } else if (percentage >= 0) {
      return 1;
    } else {
      return 1;
    }
  }
}
