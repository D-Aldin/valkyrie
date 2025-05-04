/**
 * Class representing the status bar for the Minotaur.
 * The status bar displays the Minotaur's health and changes its appearance based on the health percentage.
 */
class MinotaurStatusBar extends DrawableObject {
  /**
   * Array of health images representing different levels of the Minotaur's health.
   * @type {string[]}
   */
  healthMinotaur = [
    "./assets/image/status/minotaur1.png",
    "./assets/image/status/minotaur2.png",
    "./assets/image/status/minotaur3.png",
    "./assets/image/status/minotaur4.png",
    "./assets/image/status/minotaur5.png",
  ];

  /**
   * The health percentage of the Minotaur.
   * @type {number}
   */
  percentageMinotaur = 100;

  /**
   * The actual health of the Minotaur.
   * @type {number}
   */
  live = 100;

  /**
   * Creates an instance of the MinotaurStatusBar.
   * Loads the default health image and sets the position, size, and initial health.
   */
  constructor() {
    super();
    this.loadImage("./assets/image/status/minotaur5.png");
    this.loadImagesInCache(this.healthMinotaur);
    this.setPercentageMinotaur(this.percentageMinotaur);
    this.x_position = 540;
    this.y_position = 5;
    this.width = 178;
    this.height = 135;
  }

  /**
   * Sets the health percentage of the Minotaur and updates the status bar's image accordingly.
   * @param {number} percentage - The health percentage to be set (0 to 100).
   */
  setPercentageMinotaur(percentage) {
    this.percentageValkyrie = percentage;
    let path = this.healthMinotaur[this.resolveImagePathMino(percentage) - 1];
    this.img = this.imageCache[path];
  }

  /**
   * Resolves the appropriate health image path based on the Minotaur's current health percentage.
   * @param {number} percentage - The health percentage to determine the image path for.
   * @returns {number} - The index of the image corresponding to the health percentage.
   */
  resolveImagePathMino(percentage) {
    if (percentage >= 100) return 5;
    if (percentage >= 80) return 4;
    if (percentage >= 60) return 3;
    if (percentage >= 40) return 2;
    if (percentage >= 0) return 1;
    return 1;
  }
}
