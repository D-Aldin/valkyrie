/**
 * Class representing the status bar that displays the player's item count.
 * The bar updates to show the current number of items collected.
 */
class ItemStatusBar extends DrawableObject {
  /**
   * Array of image paths representing the item count status.
   * Each image corresponds to a specific number of items.
   * @type {string[]}
   */
  items = [
    "./assets/image/items/item/status0.png",
    "./assets/image/items/item/status1.png",
    "./assets/image/items/item/status2.png",
    "./assets/image/items/item/status3.png",
    "./assets/image/items/item/status4.png",
    "./assets/image/items/item/status5.png",
  ];

  /**
   * Creates an instance of the ItemStatusBar class.
   * Initializes the position and sets the image representing the initial item count.
   */
  constructor() {
    super();
    this.loadImage("./assets/image/items/item/status0.png"); // Default image for 0 items.
    this.loadImagesInCache(this.items);
    this.x_position = 20; // Horizontal position of the status bar.
    this.y_position = 30; // Vertical position of the status bar.
    this.width = 120; // Width of the status bar.
    this.height = 50; // Height of the status bar.
  }

  /**
   * Sets the item count displayed on the status bar.
   * Updates the image based on the current item count.
   *
   * @param {number} count - The current number of items collected.
   */
  setItemCount(count) {
    let index = Math.min(count, this.items.length - 1); // Ensure the count is within bounds.
    let path = this.items[index]; // Select the appropriate image for the item count.
    this.img = this.imageCache[path]; // Update the displayed image.
  }
}
