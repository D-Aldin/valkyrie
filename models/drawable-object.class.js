/**
 * Class representing a drawable object in the game, such as characters or items.
 * Provides methods for loading images, drawing them to the canvas, and handling image caching.
 */
class DrawableObject {
  /**
   * The image of the object.
   * @type {HTMLImageElement}
   */
  img;

  /**
   * The index of the current image being displayed.
   * @type {number}
   */
  currentImage = 0;

  /**
   * A cache storing images for quick access.
   * @type {Object.<string, HTMLImageElement>}
   */
  imageCache = {};

  /**
   * List of intervals associated with the object.
   * @type {number[]}
   */
  intervals = [];

  /**
   * The height of the object.
   * @type {number}
   */
  height = 110;

  /**
   * The width of the object.
   * @type {number}
   */
  width = 80;

  /**
   * Loads an image from the specified path and sets it as the object's image.
   *
   * @param {string} path - The path to the image file.
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * Draws the object on the canvas at its current position, adjusting for the camera position.
   *
   * @param {CanvasRenderingContext2D} ctx - The 2D drawing context of the canvas.
   * @param {number} [cameraPosition=0] - The camera's x-coordinate to adjust the object's position.
   */
  draw(ctx, cameraPosition = 0) {
    if (this.img && this.img.complete && this.img.naturalWidth > 0) {
      ctx.drawImage(this.img, this.x_position - cameraPosition, this.y_position, this.width, this.height);
    }
  }

  /**
   * Loads an array of images into the image cache for later use.
   *
   * @param {string[]} arr - An array of image paths.
   */
  loadImagesInCache(arr) {
    arr.forEach((path) => {
      let image = new Image();
      image.src = path;
      this.imageCache[path] = image;
    });
  }

  /**
   * Draws a frame around the object to visualize its boundaries, useful for debugging.
   * Only draws frames for specific object types like `Valkyrie`, `Minotaur`, etc.
   *
   * @param {CanvasRenderingContext2D} ctx - The 2D drawing context of the canvas.
   */
  drawFrame(ctx) {
    if (
      this instanceof Valkyrie ||
      this instanceof Minotaur ||
      this instanceof Skeleton ||
      this instanceof Item ||
      this instanceof Gold
    ) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x_position, this.y_position, this.width, this.height);
      ctx.stroke();
    }
  }

  /**
   * Stops all intervals associated with this object.
   * This is useful for clearing ongoing animations or timed actions.
   */
  stopIntervals() {
    this.intervals.forEach((interval) => {
      clearInterval(interval);
      // console.log(this.intervals); // Uncomment to log the stopped intervals.
    });
  }
}
