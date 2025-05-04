/**
 * Class representing the gold status bar that displays the amount of collected gold in the game.
 */
class GoldStatusBar extends DrawableObject {
  /**
   * Array of image paths representing different levels of gold collected.
   * The images correspond to the amount of gold collected, ranging from 0 to 5.
   * @type {string[]}
   */
  gold = [
    "./assets/image/items/gold/1.png",
    "./assets/image/items/gold/1.png",
    "./assets/image/items/gold/2.png",
    "./assets/image/items/gold/3.png",
    "./assets/image/items/gold/4.png",
    "./assets/image/items/gold/5.png",
  ];

  /**
   * Creates an instance of the GoldStatusBar class.
   * Initializes the position and images for the gold status bar.
   */
  constructor() {
    super();
    this.loadImage("./assets/image/items/gold/0.png"); // Load the initial (empty) gold image.
    this.loadImagesInCache(this.gold); // Load the images for different gold counts into the cache.
    this.x_position = 21; // Set the x-coordinate position of the gold status bar.
    this.y_position = 80; // Set the y-coordinate position of the gold status bar.
    this.width = 120; // Set the width of the gold status bar.
    this.height = 50; // Set the height of the gold status bar.
  }

  /**
   * Updates the gold status bar to display the current count of gold.
   *
   * @param {number} count - The current count of collected gold.
   * This will select the appropriate image based on the count of gold collected.
   */
  setGoldCount(count) {
    let index = Math.min(count, this.gold.length - 1); // Ensure the count doesn't exceed the available images.
    let path = this.gold[index]; // Get the path for the corresponding gold image.
    this.img = this.imageCache[path]; // Set the current image for the gold status bar.
  }
}
