/**
 * Class representing a collectible gold item in the game.
 * The gold item can be collected by the player when they interact with it.
 */
class Gold extends DrawableObject {
  /**
   * The image path for the gold item.
   * @type {string[]}
   */
  gold = ["assets/image/items/gold/gold.png"];

  /**
   * The y-coordinate position of the gold item on the screen.
   * @type {number}
   */
  y_position = 200;

  /**
   * The width of the gold item.
   * @type {number}
   */
  width = 50;

  /**
   * The height of the gold item.
   * @type {number}
   */
  height = 50;

  /**
   * Creates an instance of the Gold class.
   * Initializes the gold item with a random position on the screen.
   */
  constructor() {
    super();
    this.loadImage(this.gold); // Load the gold image.
    this.x_position = 100 + Math.random() * 1000; // Set a random x-coordinate position for the gold.
    this.y_position = 200 + Math.random() * 100; // Set a random y-coordinate position for the gold.
    this.loadImagesInCache(this.gold); // Load the gold image into the cache.
  }

  /**
   * Animates the gold item.
   * Currently, this method does not perform any animation but is set up for future extensions.
   */
  animate() {
    setInterval(() => {
      // Animation logic can be added here in the future.
    }, 60); // The interval is set to 60 milliseconds for animation updates.
  }
}
