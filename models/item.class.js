/**
 * Class representing an item in the game.
 * Items can be collected by the player during the game.
 */
class Item extends DrawableObject {
  /**
   * Array of image paths representing the item.
   * @type {string[]}
   */
  item = ["./assets/image/items/item/item.png"];

  /**
   * The vertical position of the item on the screen.
   * @type {number}
   */
  y_position = 450;

  /**
   * The width of the item.
   * @type {number}
   */
  width = 60;

  /**
   * The height of the item.
   * @type {number}
   */
  height = 20;

  /**
   * Creates an instance of the Item class.
   * Initializes the item's position and loads its image.
   */
  constructor() {
    super();
    this.loadImage(this.item);
    this.x_position = 200 + Math.random() * 1000; // Random horizontal position for the item.
    this.loadImagesInCache(this.item);
  }
}
